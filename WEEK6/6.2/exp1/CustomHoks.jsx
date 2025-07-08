// import React from 'react';

// // Custom hook for counter logic 
// function useCounter(initialValue = 0) {
//     const [count, setCount] = React.useState(initialValue);

//     const increment = () => setCount(prevCount => prevCount + 1);
//     const decrement = () => setCount(prevCount => prevCount - 1);
//     const reset = () => setCount(initialValue);

//     return { count, increment, decrement, reset };
// }

// function CounterComponent() {
//     const { count, increment, decrement, reset } = useCounter(10); // Starting count is 10

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
// }

// export default CounterComponent;


//custom hook for fetch data
// import React, { useState, useEffect } from "react";

// // Custom Hook: useTodos
// function useTodos() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     async function fetchTodos() {
//       const res = await fetch("https://sum-server.100xdevs.com/todos");
//       const data = await res.json();
//       setTodos(data.todos);
//     }
//     fetchTodos();
//   }, []);

//   return todos;
// }

// // Todo Component: Renders individual todo items
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }

// // App Component: Uses the custom hook and renders todos
// function App() {
//   const todos = useTodos(); // Using the custom hook

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo
//           key={todo.id}
//           title={todo.title}
//           description={todo.description}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
