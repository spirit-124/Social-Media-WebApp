import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    members: { type: Array },
  },
  {
    timestamps: true,
  }
);

const ChatModel = new mongoose.model("chat", ChatSchema);
export default ChatModel;
