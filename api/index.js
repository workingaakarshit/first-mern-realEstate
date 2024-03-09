import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose
.connect("mongodb+srv://aakarshit:aakarshit@cluster0.zwhridn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(console.log("data  base connected"));
let port = '3001';

 

app.listen(port, () => {
    console.log(`port is running on ${port}`)
})