//whie throwing an error it stop the all upcoming code segment and stop  their execution

//so whenever we want to stop the execution of the code we use throw keyword

//and to handel the error we use try catch block

//try block is used to execute the code and catch block is used to handel the error so that the remaining codebase can execute even after the error throw 


try{
    let a;
    // let a="harkirat";
    console.log(a.length);
    console.log("hi their from inside the try block");
}catch{
    console.log("hi their from inside the catch block");
    
}


console.log("hi their");
