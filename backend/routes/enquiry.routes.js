 import express from "express";

import {
  createEnquiry
}
from "../controllers/enquiry.Controllers.js";

const router = express.Router();

router.post(
  "/",    
  createEnquiry
);

export default router;
