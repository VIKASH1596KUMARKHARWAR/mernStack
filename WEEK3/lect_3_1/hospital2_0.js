const express = require("express");

const app = express();
const port = 3000;

app.use(express.json()); // Correct initialization

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;

    if (!kidneys) {
        res.json({
            msg: "wrong inputs"
        })
        // return res.status(400).send("Invalid request: kidneys data is required.");
    }

    const kidneyLength = kidneys.length; // Use the .length property
    res.send(`You have ${kidneyLength} kidneys.`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
