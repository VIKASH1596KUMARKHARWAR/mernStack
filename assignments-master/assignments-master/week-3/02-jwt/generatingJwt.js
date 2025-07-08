//testing the generation

const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod")



const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    // Your code here
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema .safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({username}, jwtPassword);
    
    return signature;
}

function decodeJwt(token) {
    const decoded = jwt.decode(token);
    // return decoded;
    if(decoded){
        return true;
    }
    else {return false;}
}


let  user = "test@example.com";
let pass = "12asfa"
const ans = signJwt(user,pass);

 const decodedans = decodeJwt(ans); 
console.log(ans);
console.log(decodedans);
