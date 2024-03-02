import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    firstname: {
      type: "string",
      required: true,
    },
    lastname: {
      type: "string",
      required: false,
    },
    isAdmin: {
      type: "boolean",
      default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    country: String,
    relationship: String,
    country: String,
    followers: [],
    following: [],
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("Users", userSchema);
export default userModel;
