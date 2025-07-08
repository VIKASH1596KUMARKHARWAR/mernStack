//promises are symtsticsl sugar(writing prettier)  that make the code slightly more readable
const fs = require("fs");
//ex1 -- synchronous function
/*
function findSum(n) {
	let ans = 0;
	for (let i = 0; i < n; i++) {
		ans += i;
	}
	return ans;
}

function findSumTill100() {
	console.log(findSum(100));
}
findSumTill100();
console.log("hello world");
*/

//creating our own asynchronous functions

//ex1 ====>> ugly way[w/o promises]
//its just a wrapper on the top of another async fn,which is fine.usually all async fn you will write will be on top of JS provide async fn like settimeout of fs.radfile

/*const fs = require("fs");
//my own asyn..fn
function kiratReadFile(cb) {
	fs.readFile("./WEEK1/L1.2/foundation.txt", "utf-8", function (err, data) {
		cb(data);
	});
}

function onDone(data) {
	console.log(data);
}

kiratReadFile(onDone);
*/

/* ========= CLEARER WAY --> NO CB used, the reason to use promises is get rid of cb itself =======*/
//bcz cb are an ugly way to write asynchrnous code
/*ex2  [with promises]*/

function kiratReadFile() {
	console.log("Inside kiratReadfile");
	fs.readFile("./WEEK1/L1.2/foundation.txt", "utf-8", function (err, data) {
		// return ans;  just like this (what we commonly return ) but here we will return a promise
		return new Promise(function (resolve) {
			console.log("inside promise");
			console.log("before resolve");
			resolve(data);
		});
	});
}
//callback fn to call
function onDone(data) {
	console.log(data);
}
// kiratReadFile().then(onDone); //or
var a = kiratReadFile();
console.log(a); //unless callled the .then(function) ==> the promise will be of pending
// notice:: it syncronously return the promise, but n0t the data that's why we can log here...but thw data  of the promise will come  asynchronously
a.then(onDone);
