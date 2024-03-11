import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app = express();
dotenv.config();
mongoose
    .connect(process.env.MONGO)
    .then(()=> {console.log("data  base connected");
    })
    .catch((err) => {
        console.log(err);
    });
let port = '3001';

 

app.listen(port, () => {
    console.log(`port is running on ${port}`)
})