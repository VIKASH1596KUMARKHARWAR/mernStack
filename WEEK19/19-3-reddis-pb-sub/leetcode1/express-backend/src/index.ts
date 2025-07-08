import express from 'express'
import {createClient} from "redis"

const app = express();
app.use(express.json());

const client = createClient();
client.connect();

app.post("/submit",async(req,res)=>{
    const {problemId,userId,code,langage} = req.body;
    //push this to a db prisma.Submission
    await client.lPush("submissions",JSON.stringify({problemId,userId,code,langage}))
    res.json({
        message:"submission received!"
    })
})


app.listen(3000);