
// http://localhost:3000/email-validation


/*{
email : string => email
password  :  attest 8 digits 
country  : "IN","USA"
}
*/

const express = require("express");
const app = express();
const zod = require("zod");
app.use(express.json());

const schema = zod.object(zod.string())


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});