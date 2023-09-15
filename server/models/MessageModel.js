import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const MessageModel = mongoose.Model("Message", MessageSchema);
export default MessageModel;
