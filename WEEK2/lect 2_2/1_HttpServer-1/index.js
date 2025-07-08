const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	// req ===>heders,body, query parameters
	//do machine learning models
	// res.send("Hello World!");
	res.json({
		name: "vikash",
		age: 21,
	}); //return the js object
}); // by default router bn gya

// app.listen(port);
app.listen(port, () => {
	console.log(`example app listening on the port ${port}`);
});

// http://localhost:3000

/*app.get("/", function(req, res) {
	res.send("Hello World!");
}); // by default router bn gya

app.listen(port, function()  {
	console.log(`example app listening on the port ${port}`);
});
*/
