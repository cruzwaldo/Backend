import express from "express"; //module.
import { connectDB } from "./src/config/db.config.js";
import { env } from "./src/config/env.config.js";

const app = express(); 


connectDB()
app.get('/health',(req, res)=>{
    res.send('funciona')
})






app.listen(env.port,()=>{

    console.log('server running on port 3000')
})
