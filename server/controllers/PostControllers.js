import PostModel from "../models/PostModel.js";
import mongoose from "mongoose";
import userModel from "../models/UserModels.js";

// Create New Post ==============================
export const createNewPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a Post ======================================

export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a Post =================================

export const updatePost = async (req, res) => {
  const { userId } = req.body;
  const PostId = req.params.id;
  try {
    const post = await PostModel.findById(PostId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json(" Updated successfully");
    } else {
      res.status(403).json(" Actionforbidden");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Post Deleted =================================

export const postDelete = async (req, res) => {
  const PostId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(PostId);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json(" Deleted successfully");
    } else {
      res.status(403).json(" Action forbidden");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Like/Dislike a Post =================================

export const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json(" Post Liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json(" Post DisLiked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Timeline Post ======================
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id;

  try {
    const currentUserPosts = await PostModel.find({ userId: userId });
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
