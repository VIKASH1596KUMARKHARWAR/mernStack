const fs = require("fs");

console.log("HI there!!..form start");
fs.readFile("./WEEK1/L1.2/foundation.txt", "utf-8", function (err, data) {
	if (err) {
		console.error("Error reading the file:", err);
		return;
	}

	data += " Hi there vikash is writing the thing"; // Appending text
	fs.writeFile("./WEEK1/L1.2/foundation.txt", data, function (err) {
		if (err) {
			console.error("Error writing to the file:", err);
			return;
		}
		console.log("Data appended successfully!");
	}); //cb defined within the parent function
});
/*
const fs = require("fs");

// Define the callback function
function writeFileCallback(err) {
    if (err) {
        console.error("Error writing to the file:", err);
        return;
    }
    console.log("Data appended successfully!");
}

console.log("HI there!!..form start");
fs.readFile("./WEEK1/L1.2/foundation.txt", "utf-8", function (err, data) {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    data += " Hi there vikash is writing the thing"; // Appending text
    fs.writeFile("./WEEK1/L1.2/foundation.txt", data, writeFileCallback); // Pass callback function directly
});
 */
