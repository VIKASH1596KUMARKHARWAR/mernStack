import React, { useState } from "react";

function Todo({ title, description, completed }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "Go to the gym from 7-9",
      completed: false,
    },
    {
      id: 2,
      title: "Study DSA",
      description: "Study DSA from 9-10",
      completed: true,
    },
    {
      id: 3,
      title: "Eat Breakfast",
      description: "Eat breakfast from 7-8",
      completed: false,
    },
  ]);

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: "New Todo",
      description: "New Todo Description",
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add Random Todo</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
