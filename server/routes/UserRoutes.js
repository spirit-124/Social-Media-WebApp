import express from "express";
const router = express.Router();
import {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  UnFollowUser,
} from "../controllers/UserController.js";
import authMiddleware from "../middleware/AuthMiddleware.js";

router.get("/:id", getUser);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", authMiddleware, followUser);
router.put("/:id/unfollow", UnFollowUser);

export default router;
