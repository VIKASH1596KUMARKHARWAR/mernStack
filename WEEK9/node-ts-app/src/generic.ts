// <T> this is generic 


/*
#include <iostream>
using namespace std;

// Template function
template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    cout << add<int>(3, 5) << endl;    // Output: 8 (int)
    cout << add<double>(2.5, 4.5) << endl; // Output: 7.0 (double)
    return 0;
}
 */
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log(output1,output2);
console.log(output1.toUpperCase());


function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())


/*Did the issues go away?
User can send different types of values in inputs, without any type errors
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["harkiratSingh", 2]);
console.log(el.toLowerCase())

Typescript isn’t able to infer the right type of the return type
function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase()) */