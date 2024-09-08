import express from "express";

// Controllers
import {
  getAllProducts,
  getProduct,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.post("/", addProduct);
router.patch("/:id", updateProduct);

export default router;
