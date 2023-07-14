import express from 'express';
import mysql from 'mysql';
import postRoutes from '../api/routes/posts.js';
import userRoutes from '../api/routes/users.js';
import authRoutes from '../api/routes/auth.js';
import cors from "cors";

const app=express()

// app.use(express.json())

app.get("/",(req,res)=>{
    // if(err)res.json(err);
    res.json("Backend Connected");
});

app.use("/api/post",postRoutes);
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
// app.use(cors());

app.listen(8800,()=>{
    console.log('Connected to Backend');
})