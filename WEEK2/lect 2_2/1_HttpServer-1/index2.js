const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
	//res.send("helllo world");
	res.json({
		name: "vikash",
		age: 21,
	}); //passing js obeject, JSON DEGA
});

/*What you passed inside res.json() is a JavaScript object. In JavaScript, objects are collections of key-value pairs, where keys are strings and values can be of any data type, including strings, numbers, arrays, or even other objects.

//json mein dono key-values pe double courts hote h   
*/

app.listen(port, () => {
	console.log(`server is running on the port ${port}`);
});
