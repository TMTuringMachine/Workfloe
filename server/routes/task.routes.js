import express from 'express';

import { createTask } from '../controllers/task.controller.js';
import activeMiddleware from '../middlewares/isActive.js';
import authMiddleware from '../middlewares/isAuth.js';

const router = express.Router();

router.post('/createTask/:id', authMiddleware, activeMiddleware, createTask);

export default router;
