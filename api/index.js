import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./Routes/user.route.js";
import authRouter from "./Routes/auth.route.js";
import dotenv from "dotenv";
dotenv.config();

const {MONGO_URI, PORT} = process.env;

mongoose
    .connect(MONGO_URI)
    .then(()=>console.log("MongoDB is connected successfully"))
    .catch((err)=>console.error(err));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test",(req,res)=>res.json({message:"hello"}));
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

