// props == parent to child


import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json(); // Parse response
        setTodos(json); // Directly set the array from the response
      })
      .catch((err) => {
        console.error("Error fetching todos:", err);
      });
  }, []);
  
    // Empty dependency array ensures it runs only once
  
  return (
    <div>
      {/* hi their */}
      <CreateTodo/>
      {/* <Todos todos={[
    { title: 'todo1', description: "do the todo 1", completed: false },{
      title: 'todo2', description: "do the todo 2", completed: true
    }
]}></Todos> */}

<Todos todos={todos} />

    </div>
  )
}

export default App
