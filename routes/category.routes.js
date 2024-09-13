import express from "express";

import {
  getAllCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategory);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);
router.get("/:id", updateCategory);
