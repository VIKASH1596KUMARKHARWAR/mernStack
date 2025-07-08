function sum(a, b) {
	return a + b;
}

//arrow function
const sum = (a, b) => {
	return a + b;
};

// example 2
app.get("/", (req, res) => {});
app.get("/", function (req, res) {});
//both are the same  thing

// map
//given an array give me back an arr in which every element is multplied by twice

const input = [1, 2, 3, 4, 5];
function transform(i) {
	return i * 2;
}
const ans = input.map(transform);
console.log(ans);

//way 2
const ans1 = input.map(function (i) {
	return i * 2;
});
console.log(ans);
//way 3
const ans2 = input.map((i) => {
	return i * 2;
});
console.log(ans2);

//filter
//given the input array give back all the even number
const arr = [1, 2, 3, 4, 5];

const newaRR = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 == 0) {
		newaRR.push(arr[i]);
	}
}
console.log(newArr);

//way 2
function filterLogic(n) {
	if (n % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

const arr1 = [1, 2, 3, 4, 5];
const anss = arr.filter(filterLogic);
console.log(ans);

//way 3
const newArr = arr.filter((num) => {
	return num % 2 == 0;
});

//useCase filter
const arr = ["harkirat", "roman", "parsn"];

const ans = arr.filter(function (n) {
	if (n.startwith("h")) {
		return true;
	} else {
		return false;
	}
});

console.log(ans);

/*
/user input
const arr = [];
const length = parseInt(prompt("Enter the number of elements in the array:"));

// Loop to get input from user
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt(`Enter element ${i + 1}:`)));
}

const newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }
}

console.log("Original Array:", arr);
console.log("New Array with Even Numbers:", newArr);
*/
