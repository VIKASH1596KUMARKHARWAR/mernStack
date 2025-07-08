const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());

// Sample todos data
const todos = [
    { id: 1, title: "Buy groceries", description: "Get milk, eggs, and bread" },
    { id: 2, title: "Complete assignment", description: "Finish the React project" },
    { id: 3, title: "Call mom", description: "Catch up with mom on the phone" },
];

// Todos endpoint
app.get("/todos", (req, res) => {
    const { id } = req.query; // Optional query parameter
    if (id) {
        const todo = todos.find((todo) => todo.id === parseInt(id));
        if (todo) {
            res.json({ todo });
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } else {
        res.json({ todos });
    }
});

// Root route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the todos server!",
        endpoint: "/todos",
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
