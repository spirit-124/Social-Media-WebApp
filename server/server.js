import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Db/config.js";
import morgan from "morgan";

// Routes
import AuthRoutes from "./routes/AuthRoutes.js";

dotenv.config();
connectDb();

// middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", AuthRoutes);
app.use("/test", (req, res) => {
  console.log("Test Purpose");
  res.json({
    message: "Hello There",
  });
});

const port = process.env.PORT || 8002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
