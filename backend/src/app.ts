import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";

dotenv.config()

connectDB
const app = express();

app.use(cors())
app.use(morgan("dev"))


const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})