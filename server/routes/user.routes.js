import express from "express";

import {
  getAllEmployees,
  changeEmployeeStatus,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/employees", getAllEmployees);
router.post("/changeStatus/:id", changeEmployeeStatus);

export default router;
