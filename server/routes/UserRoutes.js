import express from "express";
const router = express.Router();
import {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  UnFollowUser,
} from "../controllers/UserController.js";

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", UnFollowUser);

export default router;
