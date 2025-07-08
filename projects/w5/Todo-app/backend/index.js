const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You have sent an invalid input",
        });
        return;
    }

    await todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
    }); // No need to specify `completed` explicitly as it defaults to `false`

    res.json({
        msg: "Todo created successfully",
    });
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json(todos);
});

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You have sent an invalid input",
        });
        return;
    }

    try {
        const result = await todo.updateOne(
            { _id: req.body.id }, // Fixing key name issue
            { completed: true } // Updated field name
        );

        if (result.modifiedCount === 0) {
            res.status(404).json({
                msg: "Todo not found or already completed",
            });
            return;
        }

        res.json({
            msg: "Todo marked as Completed",
        });
    } catch (err) {
        res.status(500).json({
            msg: "Invalid ID or Server Error",
            error: err.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
