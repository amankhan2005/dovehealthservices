import express from "express";
import { createRequest } from "../controllers/request.controllers.js";

const router = express.Router();

router.post("/create", createRequest);

export default router;
