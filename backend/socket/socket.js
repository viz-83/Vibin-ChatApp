import { Server } from "socket.io";
import http from "http";
import express from "express";


const app=express();

const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"],
    }
})

export const getReceiverSocketId = (receiverId)=>{
    return userSocketMap[receiverId]; //return socket id of the receiver

}

const userSocketMap={}; //{userId:socketId}

io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);

    const userId=socket.handshake.query.userId; 
    if(userId!="undefined") userSocketMap[userId]=socket.id;

    // socket.emit() is used to send an event to the client
    io.emit("getOnlineUsers",Object.keys(userSocketMap)); //send online users to all clients

    // socket.on() is used to listen for events from the client and server
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
        delete userSocketMap[userId]; //remove user from online users list
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })

})


export {app,io,server}