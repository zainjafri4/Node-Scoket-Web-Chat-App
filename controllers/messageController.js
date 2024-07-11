const Message = require("../models/messageModel");

module.exports.messageCreate = async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;

    const message = new Message({
      chatId,
      senderId,
      text,
    });

    await message.save();

    return res.status(200).json({
      success: true,
      data: message,
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

module.exports.messagesGetAll = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await Message.find({ chatId });

    return res.status(200).json({
      success: true,
      data: messages,
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
