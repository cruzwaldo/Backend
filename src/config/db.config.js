// import mongoose => mongo
 import mongoose from "mongoose";
import { env } from "./env.config.js";
 // crear una funcion para conectarnos a la base de datos


 export async function connectDB() {
    try {
        await mongoose.connect(env.dburl);
        console.log('conectado a la base de datos');

    } catch (error) {
        console.log(error)
        
    }
    
 }
