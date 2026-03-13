import express from 'express';
import taskRoute from './routes/tasksRoutes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectDB()

app.use("/api/data", taskRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})