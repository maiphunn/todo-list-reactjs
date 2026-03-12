import express from 'express';
import taskRoute from './routes/tasksRoutes.js';

const app = express();

app.use("/api/data", taskRoute)

app.listen(5001, () => {
    console.log('Server is running on port 5001');
})