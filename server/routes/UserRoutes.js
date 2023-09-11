import express from "express";
const router = express.Router();
import { getUser, updateUser } from "../controllers/UserController.js";

router.get("/:id", getUser);
router.put("/:id", updateUser);

export default router;
