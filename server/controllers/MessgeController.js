import MessageModel from "../models/MessageModel.js";
// import ChatModel from "../models/ChatModel";

export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = await new MessageModel({
    chatId,
    senderId,
    text,
  });
  try {
    const newMessage = await message.save();
    res.status(200).json(newMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getMessage = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await MessageModel.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
