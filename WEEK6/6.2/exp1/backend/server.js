const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//mock data
const todos = [
    { id: 1, title: 'Todo 1', description: 'This is todo 1', completed: false },
    { id: 2, title: 'Todo 2', description: 'This is todo 2', completed: false },
    { id: 3, title: 'Todo 3', description: 'This is todo 3', completed: false },
    { id: 4, title: 'Todo 4', description: 'This is todo 4', completed: false },
    { id: 5, title: 'Todo 5', description: 'This is todo 5', completed: false },
];

app.get('/todos', (req, res) => {
    res.json({ todos });
});

// Route to fetch a single todo by id  >> http://localhost:8081/todo?id=1
app.get('/todo', (req, res) => {
    if (!req.query.id) {
        return res.status(400).json({ error: "Missing 'id' query parameter" });
    }

    const todo = todos.find(t => t.id === Number(req.query.id));
    if (todo) {
        res.json({ todo });
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

/**
app.get("/todo", (req, res) => {
    if (!req.query.id) {
    // If no `id` is provided, return all todos
    return res.json({ todos });
    }

  // If `id` is provided, return the specific todo
    const todo = todos.find(t => t.id === Number(req.query.id));
    if (todo) {
    res.json({ todo });
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
});

 */

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
