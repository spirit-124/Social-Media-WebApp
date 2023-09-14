import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    userId: {
      required: true,
      type: String,
    },
    desc: String,
    likes: [],
    image: String,
  },
  {
    timeStamps: true,
  }
);

const PostModel = mongoose.model("Posts", PostSchema);
export default PostModel;
