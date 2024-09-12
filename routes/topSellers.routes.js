import express from "express";

// Conrtollers
import { getTopSellers } from "../controllers/topSellers.controller.js";

const router = express.Router();

router.get("/", getTopSellers);

export default router;
