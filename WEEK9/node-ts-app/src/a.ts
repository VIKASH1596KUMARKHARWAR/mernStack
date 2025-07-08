//rootDir  and outDir


//vi .gitignore
// :wq 
// :q!

let x: number =1
// x= "hadf"
console.log(x);


//tsc -b to create a js version of the .ts file(but not required)
//ts-node a.tx to run it 


function greet(name:string){
    console.log("hello "+ name)
}
greet("sachin") 




//type Inference ability of typescript (giving or not the return type of the sum function)
function sum(a:number,b:number):number{
    return a+b
}
// const value:number =sum(1,2)
const value =sum(1,2) //bth are correct
console.log(value);


function isLegal(age:number){
    if(age>18){
        return true
    }
    else{
        return false
    }
}
let result =isLegal(20)
console.log(result);


function runAfter1s(fn:()=>void){
    setTimeout(fn,1000)
}
runAfter1s(()=>{
    console.log("hello")
})

//fn:(parameter) => return type



//  objects -- can be assign using the interface

/*const user ={
    firstname:"sachin",
    lastname:"kumar",
    email:"email@gmial.com",
    age:21,
}*/



//create a fn that take user object as a parameter and return the user object

// function IsLegalAge(user:{
//     firstname:string,
//     lastname:string,
//     email:string,
//     age:number,
// }){
//     if(user.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
//little ugle and repetation may take when need to use at multile places

//defining the object at once and use it 



/* use of ? make the object.property as optional while calling*/
interface user{
    firstname:string,
    lastname:string,
    email?:string,
    age:number,
}
function IsLegalAge(user:user){
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}


let final = IsLegalAge({
    firstname:"sachin",
    lastname:"kumar",
    age:21,
})
console.log(final + "Age");
