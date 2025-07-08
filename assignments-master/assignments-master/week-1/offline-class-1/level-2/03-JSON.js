//JSON  means zJS OBJECT NOTATION

/* Revison
users = {
	name: "harkirat",
	age: 21,
	gender: "male",
};
console.log(users["name"]);//harkiat*/

function jsonMethods(jsonString) {
	console.log("Original JSON String:", jsonString);

	// Parsing JSON string to JavaScript object
	let parsedObject = JSON.parse(jsonString); //parse actuallly convert the thing(json string) in js obejct form as above and hence make easy to access the things
	console.log("After JSON.parse():", parsedObject);

	// Stringifying JavaScript object to JSON string
	let jsonStringified = JSON.stringify(parsedObject); //stringify convert the js object to json string
	console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
	'{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

// ---- many time u get the data from server  it's in the string formate but it is actual valid in JSON only Which is convert into Javascirpt valid obect using the parse function
