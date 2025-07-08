const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
	res.send("Ji there!");
});

app.post("/conversation", (req, res) => {
	res.send("<b>Ji there!</b>");
}); //html

app.post("/conversation1", (req, res) => {
	console.log(req.headers);
	console.log(req.headers["authorisation"]);
	res.send({
		msg: "2+2=4",
	}); //js obj
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
