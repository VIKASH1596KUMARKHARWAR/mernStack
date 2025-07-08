//what if i say do that particlar job after  5 sec only or (say) create an asynchronous fn whose job is wait for some time and then resolve

/*
// way 1==> w/o promise
function kiratsAsyncFunction(callback) {
	setTimeout(callback, 2000);
}

kiratsAsyncFunction(function () {
	console.log("hello!");
});
*/

//way2 ==> usong promises
function kiratsAsyncFunction() {
	//just a wrappper to settimeout -- prettier dikhe
	let p = new Promise(function (resolve) {
		setTimeout(resolve, 2000);
	});
	return p;
}

const value = kiratsAsyncFunction();
value.then(function () {
	console.log("hi there");
});
