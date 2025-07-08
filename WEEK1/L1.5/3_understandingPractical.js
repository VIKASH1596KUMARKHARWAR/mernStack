//lets look at the js architecture  that lets us achieve this asynchronous nature

const { log } = require("console");

//http://latentflip.com/loupe   --  to visualise the asynchreonunsfn
/* to make asynchronouns- 4 things are there in js architecure to make it so  call stack,web Apis,event loop,callback Queues*/

/* 1st.check
console.log("hi there");
let a = 0;
for (let i = 0; i < 10; i++) {
	a = a + 1;
}
console.log(a);
//for the above code only one thing will be put at one time --> stack */

/*2nd Check 
console.log("hi there");
function calcuteSum() {
	let a = 0;
	for (let i = 0; i < 10; i++) {
		a = a + 1;
	}
	console.log(a);
}
calcuteSum(); //evey time any function call it goes down and above it the new ucoing code will run

*/

/*3rd _check  for the asynchronouns functions
console.log("hi there");

setTimeout(function () {
	console.log("from inside the async fn");
},20000); // like delecatig the task to kamla didi--> ek saath  do kaam  ho jaye aur run time bhi kam ho -=====> even thoung if it done(pending theread) before the other opetation it will have to wiat for the completion of that and  hence  since before doen transferred tp the callback ques

function calcuteSum() {
	let a = 0;
	for (let i = 0; i < 10; i++) {
		a = a + 1;
	}
	console.log(a);
}
calcuteSum();

*/

/*4 th_check */
console.log("hi there");
setTimeout(function () {
	console.log("from inside the async fn");
}, 20000);
setTimeout(function () {
	console.log("from inside the async fn");
}, 10000);
function calcuteSum() {
	let a = 0;
	for (let i = 0; i < 10; i++) {
		a = a + 1;
	}
	console.log(a);
}
calcuteSum();

//note:: major benefits of cb is asynchronous function onlys
