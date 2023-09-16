import express from "express";
const router = express.Router();
import {
  createNewPost,
  getPost,
  updatePost,
  postDelete,
  likePost,
  getTimelinePosts,
} from "../controllers/PostControllers.js";

router.post("/", createNewPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", postDelete);
router.put("/:id/like", likePost);
router.get("/:id", getTimelinePosts);
export default router;
