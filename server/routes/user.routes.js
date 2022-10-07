import express from "express";

import {getAllEmployees} from '../controllers/user.controller.js';

const router = express.Router();

router.get("/employees", getAllEmployees);
// router.get("/jwtVerify", jwtVerify);

export default router;
