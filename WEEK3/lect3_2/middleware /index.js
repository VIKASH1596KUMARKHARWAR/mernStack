const express = require("express")
const app = express();

//function tha retun the boolean if age >14
function isOldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}




// http://localhost:3000/ride1?age=30f
app.get("/ride1", function (req, res) {
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully riden the ride 1"
        })
    } else {
        res.status(411).json({
            msg: "Sorry oyu are not of age yet"
        })
    }
})

function isOldEnoughMiddleware(req,res,next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.json({
            msg: "Sorry oyu are not of age yet"
        })
    }
}

// app.use(isOldEnoughMiddleware);/the whole routes below this line  will use this  middleware


// http://localhost:3000/ride2?age=15
app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
    res.json({
        msg: "You have successfully riden the ride 2"
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
