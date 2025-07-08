//for connecting the common to backend 


//npm install esbuild
// npx esbuild ./src/index.ts --bundle --platform=node --outfile=dist/index.js

import express  from "express";

import {BACKEND_URL} from "@repo/common/config"
const app = express();

console.log(BACKEND_URL);
app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
})


app.listen(3005);