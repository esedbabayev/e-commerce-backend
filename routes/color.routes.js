import express from "express";

import {
  getAllColors,
  createColor,
  deleteColor
} from "../controllers/color.controller.js";

const router = express.Router();

router.get("/", getAllColors);
router.post("/", createColor)
router.delete("/:id", deleteColor)


export default router