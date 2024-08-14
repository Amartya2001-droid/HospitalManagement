import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName: process: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM"
    })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err)=>{
        console.log('Error connecting to Database: ${err}');
    });
};