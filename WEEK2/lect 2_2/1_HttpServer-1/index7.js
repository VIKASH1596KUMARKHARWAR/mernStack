const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

// POST endpoint with query parameters
app.post("/", (req, res) => {
	// Log the request body
	console.log(req.body);

	// Access query parameters from the URL
	console.log(req.query);
	console.log(req.query.message);

	res.send("hello world");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
