import express from "express";

import {
  createAppointment
}
from "../controllers/appointment.controllers.js";

const router =
  express.Router();

router.post(
  "/",
  createAppointment
);

export default router;
