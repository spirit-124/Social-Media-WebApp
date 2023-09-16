import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Db/config.js";
import morgan from "morgan";

// Routes
import {
  PostRoutes,
  UserRoutes,
  AuthRoutes,
  ChatRoutes,
  MesssageRoutes,
} from "./routes/index.js";

dotenv.config();
connectDb();

// middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// TEST ROUTE
app.use("/test", (req, res) => {
  console.log("Test Purpose");
  res.json({
    message: "Hello There",
  });
});

// Routes
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/chat", ChatRoutes);
app.use("/api/v1/Message", MesssageRoutes);

const port = process.env.PORT || 8002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
