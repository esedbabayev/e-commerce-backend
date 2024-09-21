import express from "express";

// Conrtollers
import { getTopSellersAll } from "../controllers/topSellersAll.controller.js"; 

const router = express.Router();

router.get("/", getTopSellersAll);

export default router;