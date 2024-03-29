import express from 'express';
import 'dotenv/config';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import taskRoutes from './routes/task.routes.js';

import cors from 'cors';

const app = express();
const port = process.env.PORT;

import './db/conn.js';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('SERVER IS RUNNING');
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/task', taskRoutes);

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
