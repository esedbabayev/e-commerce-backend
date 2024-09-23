import express from "express";

import {
  getAllSizes,
  createSize
} from "../controllers/size.controller.js";

const router = express.Router();

router.get("/", getAllSizes);
router.post("/", createSize)


export default router