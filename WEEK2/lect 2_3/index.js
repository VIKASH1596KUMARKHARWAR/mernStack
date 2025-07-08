//http://localhost:3000/?n=30

const express = require("express");
const app = express();

function calculateSum(n) {
	let ans = 0;
	for (let i = 0; i <= n; i++) {
		ans += i;
	}
	return ans;
}

app.get("/", function (req, res) {
	// Retrieve query parameter 'n' and parse it to an integer

	const n = parseInt(req.query.n);
	// parseInt() is used in your code to convert the query parameter n from a string to an integer so that it can be used reliably in numerical calculations.
	const ans = calculateSum(n);

	res.send(ans.toString()); //WHENEVER SENDING DATA SEND IN THE FORM OF STRING
});

app.listen(3000, function () {
	console.log("Server is running on port 3000");
});
