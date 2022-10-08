import express from "express";

import { createTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/createTask/:id", createTask);

export default router;
