import express from 'express';
import cors from 'cors';
import uploadRoutes from './routes/report.routes.js';


const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use('/api/v1/', uploadRoutes);

export default app;