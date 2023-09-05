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
    firstName: {
      type: "string",
      required: true,
    },
    lastname: {
      type: "string",
      required: false,
    },
    isAdmin: {
      type: "boolean",
      required: true,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
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
