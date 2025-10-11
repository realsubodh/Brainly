import express from "express";
import "dotenv/config";  

import "./config/db.js"

const app = express();
app.use(express.json());

app.listen(3000, ()=>console.log("App is running on Port 3k✅"))