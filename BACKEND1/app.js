import express from "express";
import { dbConnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add root route handler
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Event Management Backend API is running"
  });
});

app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;