// to run the program we can use the node <fielname.js>

// program1

// console.log("Hello world");

// program2
// let a = 1;
// a = 2;
// console.log(a);

// program3
// const a = 1;
// a = 2;
// console.log(a); //defing "a" as a const means u cannot change the value throught the program.

// program4
// let name = "Vikash kumar";
// let age = 12;
// let isMarrried = false;
// // console.log("This person name is " + name + " and age is " + age);
// if (isMarrried == true) {
// 	console.log(name + " is marrried");
// } else {
// 	console.log(name + " is not marrried");
// }
// Note :  the strkie through over name suggest ti si being used somewhere as special puropose in js

// Loops - program5
// let answer = 0;
// for (let i = 0; i <= 100; i++) {
// 	answer = answer + i;
// }
// console.log(answer);

//ARRAY - program6
/*
 let person1 = "Harkirat";
let person2 = "Vikash";
let person3 = "Rahul";
let person4 = "raj";

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

let person = ["Harkirat", "Vikash", "Rahul", "raj"];
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(person[3]);

console.log(person);
*/

//  program6;
/* const ages = [25, 24, 45, 84, 86, 71, 1, 7, 3, 4, 5, 6];
for (let i = 0; i < ages.length; i++) {
	if (ages[i] % 2 == 0) {
		console.log(ages[i]);
	}
}*/

// Intro to Object -program7

/*
const personArray = ["harkirat", "vikas", "priya"];
const genderArray = ["male", "male", "female"];
const numberofUsers = personArray.length;
for (let i = 0; i < numberofUsers; i++) {
	if (genderArray[i] == "male") {
		console.log(personArray[i]);
	}
}
*/
// now rather then maintaining the two different arrays lets optimize this code to objects instead {key : valuses}, multiple vaues withing the same key

// const user1 = {
// 	firstname: "john",
// 	gender: "male",
// };
// // console.log(user1["firstname"]); //way1
// console.log(user1.firstname); //perfect way
// console.log(user1.gender); //perfect way

//  Array of objects-- program 8
// const users = [1, 2, 3];
// const users2 = ["Harkirat", "Vikash", "Queens"];
//also there will be an array of the gender so rather maintaining them all we can do this...that is the object se khelenge

/*
const allUsers = [
	{
		firstname: "john",
		gender: "male",
	},
	{
		firstname: "Vikash",
		gender: "male",
	},
	{
		firstname: "Queens",
		gender: "female",
	},
];

for (let i = 0; i < allUsers.length; i++) {
	if (allUsers[i].gender === "male") {
		console.log(allUsers[i].firstname);
	}
}
*/

//program 9
/*
1.Abstract out logc in your program
2.TAKE ARGUMENT as an input,return a value a output
3.you can think of as them as independent program that is supposed to  do something given An input
4.FUNCTION CAN TAKE OTHER FUNCTIONS AS as an input ===> callback
*/
/*
function sum(a, b) {
	// do thing with input and return an input
	return a + b;
}
const value = sum(1, 2);
const value2 = sum(10, 2);
console.log(value);
console.log(value2); //once defined a function can take in use multi time
*/

// ============program-10(callback)============
function sum(num1, num2) {
	let result = num1 + num2;
	return result;
}

function displaResult(data) {
	console.log("Result of the sum is :  " + data);
}

function displaResultPassive(data) {
	console.log("Sum's Result is :  " + data);
}
//Ques. You are only allowed to call one function after this >>>  How will you displayResult of a sum

//Normalll what we do dis calling two functions
// const ans = sum(1, 2);
// displaResult(ans);

// but the constrain is of 1 ===> so we do something like in internally callING THE OTHER FUNCTION

/*
//  wAY 1 -Manual tarika jo kaam  nhi aayega   
function sum(num1, num2) {
	let result = num1 + num2;
	 displaResult(result);
}
function displaResult(data) {
	console.log("Result of the sum is :  " + data);
}
function displaResultPassive(data) {
	console.log("Sum's Result is :  " + data);
}
const ans = sum(1,3);
// question. what if i say do it in passing type ...so there we need to change the program
*/

//CALLBACKS
function sum(num1, num2, funcTOCall) {
	let result = num1 + num2;
	funcTOCall(result);
	//funcTOCall is just an argument  but meanwhile inspite of being a simple variable it is little bit up -- being a function().
}
function displaResult(data) {
	console.log("Result of the sum is :  " + data);
}
function displaResultPassive(data) {
	console.log("Sum's Result is :  " + data);
}
const ans = sum(1, 3, displaResult);
//BENEFITS:: WE CAN EASILY CHANGE WHILE CALLING ThE FNCTION WHAT TYPE OF INfO WE NEED
// cb ==> a function goes to another function as a parameter
