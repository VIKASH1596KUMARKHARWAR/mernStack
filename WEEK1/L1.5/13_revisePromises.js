/* very easy fode but the thread wil stuck for 1 sec a line 2 and after printing the willl again stuck for  2 sec  at line 5....not an async calll (here)..but we will wrinte the code lilke this w/o loosing core of async
====> that is ..yet the thread will stuck here,then also we can do the other things ...just liek parallel way(REMEMBER JS IS SINGLE THREADED)
----->  PROMISE will let u do this  (async await)- w/o nested cb
waitFor(1000);
console.log("hi there");

waitFor(2000);
console.log("hi there");

waitFor(3000);
console.log("hi there");
*/

// Approach#2
// cb way
/*
function myOwnSetTimeout(callbacks, duration) {
	setTimeout(callbacks, duration);
}

myOwnSetTimeout(function () {
	console.log("after settimeout");
}, 1000);*/

//Promisified - way of above code
function myOwnSetTimeout(duration) {
	//koi cb nhi lega && returns the promise
	let p = new Promise(function (resolve) {
		setTimeout(resolve, duration);
	});
	return p;
}

myOwnSetTimeout(1000).then(function () {
	//jo .then mein diya hai whi resolve krega
	console.log("log the  frist thing");
});
