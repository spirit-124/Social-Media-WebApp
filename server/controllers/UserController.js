import UserModels from "../models/UserModels.js";
import bcrypt from "bcrypt";

// getUser
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModels.findById(id);

    if (user) {
      const { password, ...otherdetails } = user._doc;
      res.status(200).json(otherdetails);
    } else {
      res.status(404).json("No such user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update User

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserid, currentUserAdminStatus, password } = req.body;
  if (currentUserAdminStatus || currentUserid === id) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModels.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json("Not Authenticated");
    }
  } else {
    res
      .status(403)
      .json("Access Denied!! You can only update Your own profile.");
  }
};

// Delete user

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserAdminStatus, currentUserId } = req.body;

  if (currentUserAdminStatus || currentUserId === id) {
    try {
      await UserModels.findByIdAndDelete(id);
      res.status(200).json("User Deleted Successfully");
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res
      .status(403)
      .json("Access Denied!! You can only Delete Your own profile.");
  }
};

// Follow of User
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { curentUserId } = req.body;

  if (curentUserId === id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await UserModels.findById(id);
      const followingUser = await UserModels.findById(curentUserId);

      if (!followUser.followers.includes(curentUserId)) {
        await followUser.updateOne({ $push: { followers: curentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("Following!!");
      } else {
        res.status(403).json("User is already Followed by you");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

// UnFollow Cntroller ============================================

export const UnFollowUser = async (req, res) => {
  const id = req.params.id;
  const { curentUserId } = req.body;

  if (curentUserId === id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await UserModels.findById(id);
      const followingUser = await UserModels.findById(curentUserId);

      if (followUser.followers.includes(curentUserId)) {
        await followUser.updateOne({ $pull: { followers: curentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("Unfollowed");
      } else {
        res.status(403).json("User is not Followed by you");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
