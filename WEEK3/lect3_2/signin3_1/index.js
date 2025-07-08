const  express =require( "express"); // Correct import for ES modules
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(express.json());

const jwtPassword = "123456"; // Consistent variable name

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

// Fixed userExists function
function userExists(username, password) {
    // Use one of the following approaches:

    // Logic 1: Simple for-loop
    // for (let user of ALL_USERS) {
    //   if (user.username === username && user.password === password) {
    //     return true;
    //   }
    // }
    // return false;

    // Logic 2: Array.prototype.some()
    // return ALL_USERS.some(
    //   (user) => user.username === username && user.password === password,
    // );

    // Logic 3: Array.prototype.find()
    return (
        ALL_USERS.find(
            (user) => user.username === username && user.password === password,
        ) !== undefined
    );
}

app.post("/signin", function (req, res) {
    try {
        const { username, password } = req.body;

        if (!userExists(username, password)) {
            return res.status(403).json({
                error: "User Doesn't exist in your Db",
            });
        }

        const token = jwt.sign({ username }, jwtPassword);

        console.log("Generated Token:", token);

        return res.json({
            token,
        });
    } catch (error) {
        console.error("Error in /signin:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        // Return a list of users other than the authenticated user
        const filteredUsers = ALL_USERS.filter(
            (user) => user.username !== username
        );
        
        return res.json({
            users: filteredUsers,
        });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
