/*                  ##simpe ts
interface   User{
    name:string;
    age:number;
};

function sumOfAge(user1:User,user2:User){
    return user1.age+user2.age;
}

//ex. usages
const result = sumOfAge({
    name :"vikash",
    age:21
},{
    name :"Ishu",
    age:20
})
console.log(result);
*/


/*
                    ##pick
interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};


type UpdateProps =  Pick<User,"name"|"age"|"password"> //select only name ,age,password from User interface

function UpdateUser(UpdateProps:UpdateProps){
    console.log(UpdateProps);
}


UpdateUser({
    name: "vikash",
    age: 21,
    password: "54151", 
});*/

/*
                    PARTIAL

interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};


type UpdateProps =  Pick<User,"name"|"age"|"password"> //select only name ,age,password from User interface
//for partial (making option if only some properites need to update for an individual user)
// select req properties for all user that might uses and make the optioal and the one comes in the req.body use that

type UpdatePropsOptional = Partial<UpdateProps>

function UpdateUser(UpdateProps:UpdatePropsOptional){
    console.log(UpdateProps);
}

UpdateUser({
    name: "vikash",
});*/




/*
interface Person {
    readonly id: string;
    readonly name: string;
    readonly age: number;
}
const person: Person = {
    id: "123",
    name: "Alice",
    age: 30
};
// This will give a TypeScript error because the properties are read-only
// person.id = "456"; // Error: Cannot assign to 'id' because it is a read-only property.
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

// Valid usage (since we're not modifying the properties)
console.log(person.id);   // Output: "123"
console.log(person.name); // Output: "Alice"
console.log(person.age);  // Output: 30



// or


type ReadOnlyPerson = Readonly<Person>;

const person2: ReadOnlyPerson = {
    id: "456",
    name: "Bob",
    age: 25
};

// Trying to modify a property will give an error
// person2.name = "Charlie"; // Error: Cannot assign to 'name' because it is a read-only property.
*/


/*
                records
interface User {
    id: string;
    name: string;
}

// Using Record to type an object with string keys and User values
type Users = Record<string, User>;

const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }*/



/*

                //use MAP instead the records
interface User {
    id: string;
    name: string;
}

// Initialize an empty Map with string keys and User values
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }*/



/* 
                    //very simialr to pick and rest name suggest
type EventType = 'click' | 'scroll' | 'mousemove';
// Using Exclude to create a new type without 'scroll'
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

// Function that accepts only 'click' and 'mousemove' events
const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.*/