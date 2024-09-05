import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDatabase from "./config/connect.js";

// Routes
import ProductRouter from "./routes/product.routes.js";

const server = express();

dotenv.config();
server.use(express.json());
server.use(cookieParser());

// Routes
server.use("/api/products", ProductRouter);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

connectToDatabase();
