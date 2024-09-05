import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Routes
import UserRoute from "./routes/user.routes.js"

const server = express();

dotenv.config();
server.use(express.json());
server.use(cookieParser());

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

// Routes
server.use("/api/users", UserRoute)

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

mongoose.connect(MONGODB_URL).then(() => {
  console.log("Database connection establised")
}).catch((error) => (
  console.error(error)
)) 
