import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import leadRoutes from "./routes/leadRoutes.js";
import cors from "cors";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


// Test route
app.get('/', (req,res) => res.send('Server is Live!'));

// Middleware
app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true
}));
app.use(express.json());



app.use("/api/lead", leadRoutes);




app.listen(port, () => {
    connectDB();
    console.log(`Server is runing on ${port}`)
})