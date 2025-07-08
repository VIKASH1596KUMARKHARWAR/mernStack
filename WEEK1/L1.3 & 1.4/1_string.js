function getlength(str) {
	console.log("Original String: ", str);
	console.log("Length:", str.length);
}
getlength("Hello World");

function Findindexof(str, target) {
	console.log("Original String :", str);
	console.log("Index:", str.indexOf(target));
	console.log("Index:", str.lastIndexOf(target));
}
Findindexof("Hello world world world", "world");
//length is not a function so str.length only

function getSlice(str, start, end) {
	console.log("Original String:", str);
	console.log("After slice :", str.slice(start, end));
}
getSlice("Helllllfv world", 0, 5);

//so to the assignment week 1 --- string there is these allll things
