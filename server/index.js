import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import leadRoutes from "./routes/leadRoutes.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true
}));
app.use(express.json());



app.use("/api/lead", leadRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.listen(port, () => {
    connectDB();
    console.log(`Server is runing on ${port}`)
})