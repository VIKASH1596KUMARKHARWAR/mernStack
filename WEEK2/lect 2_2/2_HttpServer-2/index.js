// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("<b>hiii besite</b>");
});

app.listen(port, () => {
	console.log(`Example app listing on the port ${port}`);
});
//node index.js
//nodemon index.js
