const Chat = require("../models/chatModels");

module.exports.chatCreate = async (req, res) => {
  try {
    const { firstId, secondId } = req.body;

    const chat = await Chat.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (chat) return res.status(200).json(chat);

    const newChat = new Chat({
      members: [firstId, secondId],
    });

    await newChat.save();

    return res.status(200).json({
      success: true,
      data: newChat,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

module.exports.chatGetAll = async (req, res) => {
  try {
    const userId = req.params.userId;

    const chats = await Chat.find({
      members: { $in: [userId] },
    });

    return res.status(200).json({
      success: true,
      data: chats,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};

module.exports.findOneChat = async (req, res) => {
  try {
    const [firstId, secondId] = req.params;

    const chat = await Chat.findOne({
      members: { $all: [firstId, secondId] },
    });

    return res.status(200).json({
      success: true,
      data: chat,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: error.message,
    });
  }
};
