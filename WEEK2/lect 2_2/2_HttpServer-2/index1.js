//npx  = node package excutable -->just to use w/o installing
//npm = node package manager
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.Port || 3000; //$env: PORT = 3001; to change the port in terminal

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Example route
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Start server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

//npm install express body-parser

//in update version of express there is inbuilt bodyParser to act as a midlleware express.json
/*const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/
