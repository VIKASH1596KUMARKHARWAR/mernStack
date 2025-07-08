// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
	console.log("Original Array:", arr);

	arr.push(element);
	console.log("After push:", arr);
} //AT  THE END OF ARRAY
pushExample([1, 2, 3], 4);

/*
const InitaialArray=[1,2,3];
InitaialArray.push(2);
console.log(InitaialArray);
*/
// pop() from back
function popExample(arr) {
	console.log("Original Array:", arr);

	arr.pop();
	console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift() ==>alt. of pop ---> front se pop krega
function shiftExample(arr) {
	console.log("Original Array:", arr);

	arr.shift();
	console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
	console.log("Original Array:", arr);

	arr.unshift(element);
	console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
	console.log("Original Arrays:", arr1, arr2);

	let arr3 = arr1.concat(arr2);
	console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
	console.log("Original Array:", arr);
	//cb
	arr.forEach(function (item, index) {
		console.log(item, index);
	});
	//what this will do is, yeh forEach() sb ke liye chalega itne bhi nos. of element hain. that's ek esa function chalayega jo )item,index) as an argument lega aur uske baad print item, index. .... function mane nhi ligkte ...kuch bhi ho shakta..don't matter because haum function khi se laa thodi rhe h ..hum yhi define kr rhe hai..
	//not exact cb,...type2-cb ..definging the fn within other fn (making whole function an a parameter to parent fn) with using no name just by the parameters and kryword `function`...with its purpose
	//cb_type3 == arrow_fn ====> diff from above as reome the `function` keyword and put the arrow after the parameters and define them  with the parent fn
}
forEachExample([1, 2, 3]);

/*other example:
const initialarray=[1,2,3,4]
function logThing(str){
  console.log(str);
}
ininalarray.forEach(function(logThing));
//humne logthing ko kbhi call nhi kiya just passed as parameters
*/

// map()
function mapExample(arr) {
	console.log("Original Array:", arr);

	let newArr = arr.map(function (item) {
		return item * 2;
	});
	console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
	console.log("Original Array:", arr);

	let newArr = arr.filter(function (item) {
		return item > 3;
	});
	console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
	console.log("Original Array:", arr);

	let found = arr.find(function (item) {
		return item > 3;
	});
	console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
	console.log("Original Array:", arr);

	arr.sort(function (a, b) {
		return a - b;
	});
	console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
