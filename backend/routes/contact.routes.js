 // routes/contact.routes.js
import express from "express";
import {
  createInquiry,
  getAllInquiry,
  deleteInquiry,
  getInquiryById,
} from "../controllers/contact.controllers.js";

const router = express.Router();

router.post("/save", createInquiry);
router.get("/", getAllInquiry);
router.get("/:id", getInquiryById);
router.delete("/:id", deleteInquiry);

export default router;
