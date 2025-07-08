//fs.read - to read a file formyour filesystem
// Fetch - to fetch some data from an api endpoints

const fs = require("fs");
fs.readFile("./WEEK1/L1.2/foundation.txt", "utf-8", function (err, data) {
	console.log(data);
});
console.log("HI THERRE"); //FIRST THIS WILL PRINT AND THEN THE AVOLE fs.read bcz that's asn asynchronouns function

//adding some more  code & process
let a = 0;
//assume takes very very longeter than the file read
for (let i = 0; i < 1000000000; i++) {
	a++;
} // being fs.read being asynchrounus  transfer the control to next operation, since the theread is here so it  will be busy here and after its execution only it goes back to the fs.read
//so when theread become ideal(means done its taks -other synchronous works ) then the control goes back to the pending thereads...here fs.read(jo asynchronouns h)

//NOTE: EVEN THOUGH PARALLELY IN THE MIDDLE OF OTHER TASKS FILE HAVE BEEN READ BUT CONTROL WILL NOT GO THERE.IT WILL BE GOING BACK TO PENDING THEAD AFTER EXECUTING THE OTHER TASKS
console.log("hi there 2");
