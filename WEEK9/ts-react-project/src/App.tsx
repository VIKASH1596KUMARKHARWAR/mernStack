
function App() {

  return (
    <div>
      <Todo title="Go to the gym" description="Morning workout session" done={false} />
      </div>
  )
}


interface TodoProp{
  title:string,
  description:string,
  done:boolean

}
/*function Todo({
  title:string,
  description:string,
  done:boolean
}) {
  ------------------
}

/*function Todo({title,description,done}:TodoProp) {
  -------------
}
 */

function Todo(props:TodoProp) {
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h3>{props.done ? "Done" : "Not Done"}</h3>
    </div>
}


//array defination

// type NumArr  = number[];
// function maxValue(arr:NumArr ) 

function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));


export default App


/* interfaces oyu can extend into class and not the type
  and type is used when you know something can have one or two ( datatypes or combination of multiple objects ... usually need to perform the &  |
*/