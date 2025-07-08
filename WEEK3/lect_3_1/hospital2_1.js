const express = require("express")
const app = express()
const port = 3000;


app.use(express.json())

app.post("/health-checkup", function (req, res) {
    //kidney = [1,2]
    // const kidneys = req.body.kidneys

    // if (!kidneys) {
    //     res.json({
    //         msg: "wrong inputs"
    //     })
    // } else {
    //     const kidneyLength = req.body.length;
    //     res.send("you have" + kidneyLength + "kidneys")

    //many if-else is a bad practice
    //lets see global catch-take 4 inputs and defined at last of all routes , if any error logged it will move to that catch

    const kidneys = req.body.kidneys;
    const kidneyLength = req.body.length;
    res.send("you have" + kidneyLength + "kidneys")

    //global catch
    app.use(function (err,req,res,next){
        // res.json({
        //     msg:"Sorry something is up with server"
        // }) //or\\
        res.status(500).send("  An internal server error occurred")
    })
});


app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
});

