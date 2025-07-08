const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
	res.send("<b>Ji there!</b>");
}); //backend can return the html also

app.listen(port);
