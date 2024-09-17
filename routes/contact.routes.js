import express from "express";

// Controllers
import {
  getContacts,
  createContact,
  updateContacts,
  deleteContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", getContacts);

router.post("/", createContact);

router.patch("/:id", updateContacts);

router.delete("/:id", deleteContact);

export default router;
