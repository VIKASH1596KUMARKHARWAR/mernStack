// todos is a destructured props 
//   props  --->>>  Arrays of objects

/*todos =[{
    title:"go to gym",
    desc:"go to gym"

},
{
    title:" dsa ",
    desc:"dsa practice"
}]*/

// export function Todos({todos}){
//     return <div>
//         {todos.map(function(todo){
//             return  <div>
//             <h1>{todo.title}</h1>
//             <h2> {todo.description}</h2>
//             <button>{todo.completed ? "Complete" : "Incomplete"}</button>
//             </div>            
//         })}
//     </div>
// }
export function Todos({ todos }) {
    return (
      <div style={{ backgroundColor: "whitesmoke", padding: 5 }}>
        {todos.length === 0 ? (
          <p>No todos available</p>
        ) : (
          todos.map((todo) => (
            <div key={todo._id}> {/* Use unique `_id` as the key */}
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed ? "Complete" : "Incomplete"}</button>
            </div>
          ))
        )}
      </div>
    );
  }
  