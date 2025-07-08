/*var d = new Date();
console.log(d.getDate());
similar to this pomise is */

/*//          code 1
var d = new Promise(function (resolve) {
	setTimeout(function () {
		resolve("foo");
	}, 1000); //thode time just rok ke rakha
});

function callback() {
	console.log(d); //here gets resolved
}

console.log(d); //still pending- not resolved
d.then(callback);
*/
/*what even a promise? 
    1 >> its just a class that makes cb and async fn ore readable
    2 >> whenever u create it, u need to pass in a fn as the first arg which has resove as the first arg*/

// example==2 proimise imediate resolved==== dummy function(no use -just to undeerstand)
let p = new Promise(function (resolve) {
	resolve("hi there");
});

p.then(function () {
	console.log(p);
});
