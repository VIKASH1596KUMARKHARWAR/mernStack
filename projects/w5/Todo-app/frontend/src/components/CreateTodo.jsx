import { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Title"
                value={title} // Bind the input value to title state
                onChange={(e) => setTitle(e.target.value)} // Update state on input change
            />
            <br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Description"
                value={description} // Bind the input value to description state
                onChange={(e) => setDescription(e.target.value)} // Update state on input change
            />
            <br />
            <button
                style={{ padding: 10, margin: 10 }}
                onClick={() => {
                    // Ensure title and description are not empty before making a request
                    if (!title || !description) {
                        alert("Both title and description are required.");
                        return;
                    }

                    fetch('http://localhost:3000/todos', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: { 'Content-Type': 'application/json' },
                    })
                        .then(async (res) => {
                            if (res.ok) {
                                const json = await res.json();
                                alert("Todo added successfully!");
                                setTitle(""); // Clear the input fields after successful addition
                                setDescription("");
                            } else {
                                alert("Failed to add Todo. Please try again.");
                            }
                        })
                        .catch((error) => {
                            console.error("Error adding todo:", error);
                        });
                }}
            >
                Add Todo
            </button>
        </div>
    );
}
