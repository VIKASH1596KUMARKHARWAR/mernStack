// import {useEffect, useState} from 'react';

// // fetching all todos
// function App () {
//   const [todos, setTodos] = useState ([]);

//   useEffect (() => {
//     //from week 4 -> server
//     // fetch("http://localhost:8080/all-todos")
//     fetch ('http://localhost:8081/todos')
//     .then (async function (res) {
//       const json = await res.json ();
//       setTodos (json.todos);
//     });
//   }, []);

//   /*
//     useEffect(() => {
//     // Fetch all todos using Axios
//     axios
//       .get("http://localhost:8081/todos")
//       .then(response => {               //.then(function(response){........})
//         setTodos(response.data.todos); // Update state with response data
//       })
//       .catch(err => console.error('Error fetching todos:', err));
//   }, []); */
//   return (
//     <div>
//       {todos.map (todo => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({title, description}) {
//   return (
//     <div>
//       <h1>
//         {title}
//       </h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }

// export default App;

//single todo
// import { useEffect, useState } from 'react';

// function App() {
//   const [todo, setTodo] = useState(null); // Store a single todo object

//   useEffect(() => {
//     // Fetch a single todo by ID
//     fetch(`http://localhost:8081/todo?id=${5}`)
//       .then(async function (res) {
//         const json = await res.json();
//         setTodo(json.todo); // Update state with the single todo
//       })
//       .catch(err => console.error('Error fetching todo:', err));
//   }, []);

//   return (
//     <div>
//       {todo ? (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ) : (
//         <p>Loading...</p> // Display loading text while fetching
//       )}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }

// export default App;


// //fetching by id only for single todo
// import { useState, useEffect } from 'react';
// import axios from 'axios';  // Import Axios

// function App() {
//   return (
//     <div>
//       <Todo id={3} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});  // State to hold the todo data- useState object

//   useEffect(() => {
//     // Use Axios for fetching data
//     axios
//       .get(`http://localhost:8081/todo?id=${id}`)
//       .then((res) => {
//         setTodo(res.data.todo); // Update the todo state with the fetched data
//       })
//       .catch((err) => console.error("Error fetching todo:", err));
//   }, [id]);  // Dependency array ensures it runs only when `id` changes

//   return (
//     <div>
//       {todo.title ? (
//         <>
//           <h1>{todo.title}</h1>
//           <h4>{todo.description}</h4>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;


// //selecting ur own id from  ui --- using button

import { useState, useEffect } from 'react';
import axios from 'axios';  // Import Axios
import UseMemo from './UseMemo';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedId, setSelectedId] = useState(1);  // State to hold the selected id

  return (
    <div>
      {/* Buttons to select the todo id */}
      <div style={{ display: 'flex', gap: '10px' }}>
      {/* <div className="d-flex gap-3 ml-2"> */}
      <button onClick={() => setSelectedId(1)}>Todo 1</button>
        <button onClick={() => setSelectedId(2)}>Todo 2</button>
        <button onClick={() => setSelectedId(3)}>Todo 3</button>
        <button onClick={() => setSelectedId(4)}>Todo 4</button>
        <button onClick={() => setSelectedId(5)}>Todo 5</button>
      </div>

      {/* Display the selected todo */}
      <Todo id={selectedId} />

      <div>
        <p>
          =======================
          <h2>UseMemo</h2>
          <UseMemo/>
        </p>
      </div>

    </div>
    
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});  // State to hold the todo data

  useEffect(() => {
    // Use Axios for fetching data when the id changes
    axios
      .get(`http://localhost:8081/todo?id=${id}`)
      .then((res) => {
        setTodo(res.data.todo); // Update the todo state with the fetched data
      })
      .catch((err) => console.error("Error fetching todo:", err));
  }, [id]);  // Dependency array ensures it runs only when `id` changes

  return (
    <div>
      {todo.title ? (
        <>
          <h1>{todo.title}</h1>
          <h4>{todo.description}</h4>
        </>
      ) : (
        <p>Loading...</p>  // Show loading text while the todo is being fetched
      )}
    </div>
  );
}

export default App;


// //selecting ur own id from  ui --- using input 
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [id, setId] = useState(1);  // State to hold the selected todo ID
//   const [todo, setTodo] = useState({}); // State to hold the fetched todo data

//   // Handle ID change via user input
//   const handleIdChange = (e) => {
//     setId(e.target.value); // Update the `id` when the user changes it
//   };

//   useEffect(() => {
//     // Fetch the todo when the `id` changes
//     axios
//       .get(`http://localhost:8081/todo?id=${id}`)
//       .then((res) => {
//         setTodo(res.data.todo); // Update the todo state with the fetched data
//       })
//       .catch((err) => console.error("Error fetching todo:", err));
//   }, [id]);  // The effect runs when the `id` changes

//   return (
//     <div>
//       {/* Input field to select todo id */}
//       <input
//         type="number"
//         value={id}
//         onChange={handleIdChange}  // Update `id` when user types a new number
//         placeholder="Enter Todo ID"
//       />
//       <div>
//         {todo.title ? (
//           <>
//             <h1>{todo.title}</h1>
//             <h4>{todo.description}</h4>
//           </>
//         ) : (
//           <p>Loading...</p>  // Show loading text while the todo is being fetched
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from 'react';

// function App() {
//   const [allTodos, setAllTodos] = useState([]); // Store all todos
//   const [singleTodo, setSingleTodo] = useState(null); // Store a single todo
//   const todoId = 1; // The ID of the todo to fetch

//   // Fetch all todos
//   useEffect(() => {
//     fetch('http://localhost:8081/todos')
//       .then(async res => {
//         const json = await res.json();
//         setAllTodos(json.todos); // Update state with all todos
//       })
//       .catch(err => console.error('Error fetching all todos:', err));
//   }, []);

//   // Fetch a single todo
//   useEffect(() => {
//     fetch(`http://localhost:8081/todo?id=${todoId}`)
//       .then(async res => {
//         const json = await res.json();
//         setSingleTodo(json.todo); // Update state with the single todo
//       })
//       .catch(err => console.error('Error fetching single todo:', err));
//   }, [todoId]); // Re-run only if `todoId` changes

//   return (
//     <div>
//       <h1>All Todos</h1>
//       {allTodos.length > 0 ? (
//         allTodos.map(todo => (
//           <Todo key={todo.id} title={todo.title} description={todo.description} />
//         ))
//       ) : (
//         <p>Loading all todos...</p>
//       )}

//       <h1>Single Todo</h1>
//       {singleTodo ? (
//         <Todo title={singleTodo.title} description={singleTodo.description} />
//       ) : (
//         <p>Loading single todo...</p>
//       )}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default App;
