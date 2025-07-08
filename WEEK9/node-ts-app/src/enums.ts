// /*Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.*/

// //enum means enumerations, iterates over some constants
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.
// }

// doSomething(Direction.Up) 


enum Direction {
    Up,
    Down,    // becomes 2 by default
    Left,    // becomes 3
    Right    // becomes 4
}

function doSomething(keyPressed: Direction) {
    // Just returning a message for demonstration
    // return `You pressed ${Direction[keyPressed]}`; // Get the name of the enum from the numeric value

    // return `You pressed ${Direction[keyPressed]}`; // Get the name of the enum from the numeric value
    return keyPressed;
}

console.log(doSomething(Direction.Down)); // Output: "You pressed Down"


/*
enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down) */