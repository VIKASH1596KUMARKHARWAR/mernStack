// import React from "react";

// function App() {
//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <Todo
//         title="Sample Todo 1"
//         description="This is the description for Sample Todo 1"
//       />
//       <Todo
//         title="Sample Todo 2"
//         description="This is the description for Sample Todo 2"
//       />
//       <Todo
//         title="Sample Todo 3"
//         description="This is the description for Sample Todo 3"
//       />
//       <Todo title="Sample Todo 4" />
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
//       <h1>{title}</h1>
//       <h5>{description || "No description provided"}</h5>
//     </div>
//   );
// }

// export default App;



              // KEYS IN  REACT

/*Lets create a simple todo app that renders 3 todos
1. Create a Todo component that accepts title, description as input
2. Initialise a state array that has 3 todos
3. Iterate over the array to render all the TODOs
4. A button in the top level App component to add a new TODO
 */

import React, { useState } from "react";
import Wrapper from "./Wrapper";

function App() {
  // Step 2: Initialize state with an array of 3 todos
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", description: "This is the first todo" },
    { id: 2, title: "Todo 2", description: "This is the second todo" },
    { id: 3, title: "Todo 3", description: "This is the third todo" },
  ]);//  or an empty array if fetching form the backend

  // Step 4: Add a new todo
  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: `Todo ${todos.length + 1}`,
      description: `This is todo number ${todos.length + 1}`,
    };
    setTodos([...todos, newTodo]); // Add the new todo to the state
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={addTodo}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add New Todo
      </button>

      {/* Step 3: Iterate over the todos array to render all todos */}
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}


{/* //Wrapper COMPONENTS */}
    <div>
      <h1>Wrapper Component Demo</h1>
      <Wrapper />
    </div>



    </div>
  );
}

// Step 1: Create a Todo component
function Todo({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}


export default App;
