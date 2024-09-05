import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const server = express();

dotenv.config();
server.use(express.json());
server.use(cookieParser());

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

mongoose.connect(MONGODB_URL).then(() => {
  console.log("Database connection establised")
}).catch((error) => (
  console.error(error)
)) 
