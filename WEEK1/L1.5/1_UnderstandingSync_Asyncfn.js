//SYNCHRONOUS ==> Sequential , one after another, one thing at a time
//aSYNCHRONOUS ==>  multiple thing happening,happens in parts....& multiple thing are  context switching with each other or deligates the tasks

//lets we have an asynchronous  function
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
setTimeout(findSumTill100, 1000); //wait for 1 sec
console.log("hello world");
*/

/*====== SO Now the ques is how to make is synchronous?? =======*/
//way::1 - busy waitng

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

//busy waiting
function syncSleep() {
	let a = 1;
	for (let i = 0; i < 1000000000; i++) {
		a++;
	}
}

syncSleep(); //faltu kaam krwake busy rakha...dumb way esa thodi krna h
findSumTill100();
console.log("hello world");

//now this is synchronous bcz first fundSumtill100 is rendered as called first and then the hello world
