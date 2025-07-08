const express = require("express");

const app = express();
const port = 5000;

//middleware to body parser
app.use(express.json());

app.post("/conversations", (req, res) => {
	console.log(req.body);
	res.send("received the data"); //yeh postman m dikha ??
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

/*
but we send the data in json na...from postman
{
    "msg":"what is 2+2=5"
} 
You're sending a JSON string. However, when Express middleware express.json() is used, it automatically parses this JSON string into a JavaScript object.

So, even though you sent JSON from Postman, by the time it reaches your route handler in Express, it's already been converted into a JavaScript object. That's why req.body is an object in your Express route handler, not a JSON string.


 */
