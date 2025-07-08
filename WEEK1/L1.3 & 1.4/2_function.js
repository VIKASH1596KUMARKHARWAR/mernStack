//===============sum 1 to n============
/*function findsum(n) {
	let ans = 0;
	for (let i = 0; i < n; i++) {
		ans = ans + i;
	}
	return ans;
}

let ans = findsum(5);
console.log(ans);

let ans2 = findsum(1000);
console.log(ans2);
*/

/*=============   CALLBACK  ==================*/
//step1: calll one function inside another--nested too...

/* before that lets have some examples */
//ex1
/*function square(n) {
	return n * n;
}

function sumOfsquares(a, b) {
	const val1 = square(a);
	const val2 = square(b);
	return val1 + val2;
}

console.log(sumOfsquares(3, 2));*/
//this is what the all languages do
//ex2
/*
function square(n) {
	return n * n;
}
function cube(n) {
	return n * n * n;
}

function sumOfsquares(a, b) {
	const val1 = square(a);
	const val2 = square(b);
	return val1 + val2;
}
function sumOfcubes(a, b) {
	const val1 = cube(a);
	const val2 = cube(b);
	return val1 + val2;
}

console.log("cube of 3 is ", cube(3));
console.log("sum of cubes of 2 and 3 is", sumOfcubes(3, 2));
*/

// so what the actuall callback, wo bata na bskd=====> to avoid the repetion of logics in above of square and cube ...taki dubara na likhna pade

function square(a) {
	return a * a;
}
function cube(a) {
	return a * a * a;
}

function sumOfSomething(a, b, cb) {
	console.log("value of a: ", a);
	console.log("value of b: ", b);
	console.log(cb); //we can log which function is passed as a parameter to our function
	const val1 = cb(a);
	const val2 = cb(b);
	return val1 + val2;
}

console.log(sumOfSomething(1, 2, square));
console.log(sumOfSomething(1, 2, cube));
//this is actual call back ==> function mein dushra function pass kr diya as a parameter
