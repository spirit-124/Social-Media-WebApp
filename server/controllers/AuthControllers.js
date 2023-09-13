// import { genSalt } from "bcryptjs";
// import jwt from "JsonWebToken";
import userModel from "../models/UserModels.js";
import bcrypt from "bcrypt";

// registers

export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  const newUser = new userModel(req.body);
  const { username } = req.body;

  try {
    // IF USER EXIST
    const oldUser = await userModel.findOne({ username });

    if (oldUser) {
      return res.status(400).json({
        message: "User already registered",
      });
    }

    // IF NEW USER

    const user = await newUser.save();

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(401).json("Wrong password");
      } else {
        res.status(200).json(user);
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
