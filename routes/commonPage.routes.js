import express from "express";

import {
  getAllCommons,
  createCommon,
  getCommonById,
  updateCommon,
  deleteCommon,
} from "../controllers/commonPage.controller";

const router = express.Router();

router.get("/", getAllCommons);

router.get("/:id", getCommonById);

router.post("/", createCommon);

router.patch("/:id", updateCommon);

router.delete("/:id", deleteCommon);

export default router;
