import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDatabase from "./config/connect.js";

// Routes
import UserRoute from "./routes/user.routes.js";
import ProductRouter from "./routes/product.routes.js";
import NewArrivalsRouter from "./routes/newArrivals.routes.js";
import TopSellersRouter from "./routes/topSellers.routes.js";

const server = express();

// Enable CORS for all origins
server.use(cors());

dotenv.config();
server.use(express.json());
server.use(cookieParser());

const PORT = process.env.PORT;

// Routes
server.use("/api/users", UserRoute);
server.use("/api/products", ProductRouter);
server.use("/api/new-arrivals", NewArrivalsRouter);
server.use("/api/top-sellers", TopSellersRouter);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

connectToDatabase();
