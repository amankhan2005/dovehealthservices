 import express from "express";

import upload from "../middleware/uploadResume.js";
import { applyNurse } from "../controllers/career.controllers.js";

const router = express.Router();

router.post(
  "/apply",
  upload.single("resume"),
  applyNurse
);

export default router;
