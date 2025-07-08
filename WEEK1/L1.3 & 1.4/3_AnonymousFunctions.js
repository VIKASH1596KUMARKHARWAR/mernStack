//if the function does not have its name they are called as anonymus function...
//how to call....????

/* *****CALLBACK TPE 2..Function ke ander hi dushre fnction ko define kr diya ..while cALLING it as a parameter*/

function square(a) {
	return a * a;
}

function sumOfSomething(a, b, cb) {
	console.log("value of a: ", a);
	console.log("value of b: ", b);
	console.log(cb); //we can log which function is passed as a parameter to our function
	const val1 = cb(a);
	const val2 = cb(b);
	return val1 + val2;
}

const ans = sumOfSomething(1, 2, function (a) {
	return a * a * a;
});
console.log(ans);
