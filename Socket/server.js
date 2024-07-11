const http = require("http");
const socket = require("socket.io");
require("dotenv").config();

const server = http.createServer();

const io = socket(server, {
  cors: {
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"],
  },
  path: "/socket.io",
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user?.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket?.id,
      });
    console.log("onlineUsers", onlineUsers);

    io.emit("getOnUsers", onlineUsers);
  });

  // add message
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find((user) => user?.userId === message?.recId);

    if (user) {
      io.to(user.socketId).emit("getMessage", message);
    }
  });

  //   Disconnect Socket
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit("getOnUsers", onlineUsers);
    console.log("onlineUsers", onlineUsers);
  });
});
