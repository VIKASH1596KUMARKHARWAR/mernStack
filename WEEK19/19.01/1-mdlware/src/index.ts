
import express from "express";

const app = express();

let requestCount = 0;

// app.use(
//     function middleware(req, res, next) {
//         requestCount++;
//         next()
//     }
// );
// or 

function middleware(req:any, res:any, next:any) {
    requestCount++;
    next()
}
app.use(middleware);

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/requestCount", (req, res) => {
    res.json({
        requestCount
    })
})

app.listen(3000);


//  ts-node src/index.ts ==>> without creating the index.js  or 
//tsc -b and node src/index.js  to run it 