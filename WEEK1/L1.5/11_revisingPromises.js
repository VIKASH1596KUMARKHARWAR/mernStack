const fs = require("fs");
//writefile se yaha purana del ho jaa rha 😣😣
function putCopyrightToFile(cb) {
	fs.readFile("./WEEK1/L1.2/foundation.txt", "utf-8", function (err, data) {
		data = data + "copyright 2020 harkirat singh";
		fs.writeFile("./WEEK1/L1.2/foundation.txt", "utf-8", function () {
			cb();
		});
	});
}
putCopyrightToFile(function () {
	console.log("copy right has been put in file");
});
