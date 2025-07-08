//corresponding to week 3.3 and with the one step further to 3.3_0

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://amitsbz1596:vikash1596@cluster0.vbkxe.mongodb.net/week3_3?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define User model
const User = mongoose.model('User', { name: String, email: String, password: String });

// Signup route
app.post("/signup", async function (req, res) {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create and save a new user
        const user = new User({
            name: username,
            email: email,
            password: password
        });

        await user.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
