import express from "express";

import {
  getAllEmployees,
  changeEmployeeStatus,
  editUserProfile,
} from "../controllers/user.controller.js";

import multer from "multer";
import { storage } from "../cloudinary/cloudinary.config.js";

const router = express.Router();

const upload = multer({ storage });

router.get("/employees", getAllEmployees);
router.post("/changeStatus/:id", changeEmployeeStatus);
router.post("/editProfile/:id", upload.single("image"), editUserProfile);

export default router;
