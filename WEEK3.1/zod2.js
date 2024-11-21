
// http://localhost:3000/email-validation


/*
email : string => email
password  :  attest 8 digits 
country  : "IN","USA"
*/

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number()); 
app.use(express.json());

app.post("/email-validation", function (req, res) {
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    
    // Validating the kidneys array using the schema
    const response = schema.safeParse(kidneys);
    
    // Sending the response back
    if (!response.success) {
        //send/json--bth can be used to send data from server to the client
        return res.status(400).send({
            error: "Invalid input",
            details: response.error.errors
        });
    }

    res.send({
        message: "Validation successful",
        data: response.data
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});