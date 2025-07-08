const jwt = require('jsonwebtoken')

const value = {
    name :"harkirat",
    accountnumber:12566611151
}


//generating the token 
const token = jwt.sign(value, 'secretkey' )
// const token = jwt.sign(value, 'secretkey', { expiresIn: '1h' })

console.log(token)

//decoding the token 
const decoded = jwt.decode(token);
console.log(decoded);


//verifying the token
const verify = jwt.verify(token, 'secretkey')
// const verify = jwt.verify(token, 'secret') //if signature is different then it throw an invalid signature
console.log(verify);
