//body parser --> express directly kr deta h yeh {index5} ===> this is alt of index5 and an old version of using way 5
// JSON. stringify() : This method takes a JavaScript object and then transforms it into a JSON string.
// JSON. parse() : This method takes a JSON string and then transforms it into a JavaScript object

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.post("/", (req, res) => {
	console.log(req.body);
	console.log(req.body.msg);
	res.send("hello world ");
});

app.listen(port, () => {
	console.log(`server is running on the port ${port}`);
});

// However, with Express 4.16.0 and higher, you can use express.json() instead of body-parser.json(). Both achieve the same result of parsing JSON request bodies.
