import express from 'express';
import taskRoute from './routes/tasksRoutes.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();


app.use(express.json()) // Middleware để phân tích cú pháp JSON trong body của yêu cầu

app.use("/api/data", taskRoute)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })

})