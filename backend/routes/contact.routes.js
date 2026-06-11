 import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
} from "../controllers/contact.controllers.js";

const router = express.Router();

/* ------------------------------------------------ */
/* PUBLIC ROUTES                                    */
/* ------------------------------------------------ */
router.post("/", createContact); 
// POST /api/contact
// body: { firstName, lastName, email, phone, message }

/* ------------------------------------------------ */
/* ADMIN ROUTES                                     */
/* ------------------------------------------------ */
router.get("/", getAllContacts); 
// GET /api/contact

router.get("/:id", getContactById); 
// GET /api/contact/:id

router.patch("/:id/status", updateContactStatus); 
// PATCH /api/contact/:id/status
// body: { status: "new" | "replied" | "closed" }

router.delete("/:id", deleteContact); 
// DELETE /api/contact/:id

export default router;
