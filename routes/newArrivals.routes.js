import express from "express";

// Conrtollers
import { getNewArrivals } from "../controllers/newArrivals.controller.js";

const router = express.Router();

router.get("/", getNewArrivals);

export default router;
