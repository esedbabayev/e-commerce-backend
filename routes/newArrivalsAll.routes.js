import express from "express";

// Conrtollers
import { getNewArrivalsAll } from "../controllers/newArrivalsAll.controller.js";

const router = express.Router();

router.get("/", getNewArrivalsAll);

export default router;