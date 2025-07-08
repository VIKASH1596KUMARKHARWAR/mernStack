//async functions ..best to remember
/*
console.log("hi there");
setTimeout(function timeou1t() {
	console.log("hi there frome settimeout1 ");
}, 8000);
console.log(" hi there from last");

console.log("Hi!");

setTimeout(function timeout2() {
	console.log("Click the button!- (from settimeout2");
}, 15000);

console.log("Welcome to loupe.");
*/
//example 2
const fs = require("fs");

console.log("HI there!!..form start");
fs.readFile("./WEEK1/L1.2/foundation.txt", "utf-8", function (err, data) {
	if (err) {
		console.error("Error reading the file:", err);
		return;
	}
	console.log(data);
});
for (let i = 0; i < 100; i++) {
	console.log(i);
}
setTimeout(function () {
	for (let i = 0; i < 100; i++) {
		console.log("garima ilu");
	}
}, 2000); // jaise hi espe aaye dekha asynchronous hain..webApi mein chala gaya baaki tb tk sabko nipta k ideal ho akha tha aur eska wait kr rha thaa,,,lekin usi beech hamara file read hoke aa gya tha ,.... toh use print kr diya
console.log("HI there from last");
