import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import {app, server} from "./socket/socket.js"; 


import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();


const PORT= process.env.PORT ||5000;

const __dirname=path.resolve();

app.use(express.json()); //middleware to parse json data(from req.body)
app.use(cookieParser()); //middleware to parse cookies

app.use("/api/auth",authRoutes); 
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


app.use(express.static(path.join(__dirname,"/frontend/dist"))); //serve static files from frontend build folder

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html")) //serve index.html for all other routes
})



server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
}); 