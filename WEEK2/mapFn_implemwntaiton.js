function customMap(array, transformationFunction) {
	// Initialize an empty array to store the transformed values
	let transformedArray = [];

	// Iterate over each element in the input array
	for (let i = 0; i < array.length; i++) {
		// Apply the transformation function to the current element
		let transformedValue = transformationFunction(array[i]);

		// Push the transformed value into the result array
		transformedArray.push(transformedValue);
	}

	// Return the array with transformed values
	return transformedArray;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];

// Define a transformation function (e.g., square each number)
function square(x) {
	return x * x;
}

// Using the custom map function
let squaredNumbers = customMap(numbers, square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
