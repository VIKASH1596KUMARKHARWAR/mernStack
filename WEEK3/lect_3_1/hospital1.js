//other way (good one) is use of middleware

//before we proceed lets add constraints to our route
//user need to send the kidneyId as a query param which should be add a number 1-2(humans have 0nly 2 kidneys)

//u can give a rage of cb while defining the routes like multiple middlewares

//u can use res.... only once at a time bcz u cannot respond  a http server twice
//for middleware(a function) where you don't need to return anythings


const express = require("express");

const app = express();
const port = 3000;

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (!(username === "harkirat" && password === "pass")) {
        res.status(400).json({ "msg": "Something up with your inputs" })
        return
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({ "msg": "Something up with your kidneys" })
        return;
    }

    //do something with code
    res.json({
        msg: "Your Kidney is fine !",
    });
});

app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
});

