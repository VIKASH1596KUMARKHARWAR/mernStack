// import {useState} from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App () {
//   const [count, setCount] = useState (0);

//   return (
//     <div>
//       <Count count={count} />
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Count({count}) {
//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// }

// function Buttons ({count,setCount}) {
//   return (
//     <div>
//       <button onClick={() => {
//         setCount(count + 1);
//       }}>Increase</button>

//       <button onClick={() => {
//         setCount(count - 1);
//       }}>Decrease</button>
//     </div>
//   );
// }

// export default App;


                  // PROP-DRILLING
// //lets put the button_called(from the App) in Count()
// import {useState} from 'react';

// function App () {
//   const [count, setCount] = useState (0);

//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Count({count, setCount}) {
//   //PROP-DRILLING  >> even though Count() dont need the setCOunt state but since button comes under it whoch need , so being parent Count() must have this as a prop's
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <Buttons count={count} setCount={setCount} />

//     </div>
//   );
// }

// function Buttons({count, setCount}) {
//   return (
//     <div>

//       <button
//         onClick={() => {
//           setCount (count - 1);
//         }}
//       >
//         Decrease
//       </button>
//       <button
//         onClick={() => {
//           setCount (count + 1);
//         }}
//       >
//         Increase
//       </button>

//     </div>
//   );
// }

// export default App;




                  // CONTEXT-API
//understanding the need of context api --- breaking the chain of props-drilling

// import {useState} from 'react';

// function App () {
//   const [count, setCount] = useState (0);

//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   );
// }

// // function Count({count, setCount}) {
//   return (
//     <div>
//       <CountRenderer count={count}/>
//       <Buttons count={count} setCount={setCount} />

//     </div>
//   );
// }

// function CountRenderer({count}){
//   return<div>{count}</div>
// }

// function Buttons({count, setCount}) {
//   return (
//     <div>

//       <button
//         onClick={() => {
//           setCount (count - 1);
//         }}
//       >
//         Decrease
//       </button>
//       <button
//         onClick={() => {
//           setCount (count + 1);
//         }}
//       >
//         Increase
//       </button>

//     </div>
//   );
// }

// export default App;



//for using the COntexApi >>..... wrap anyone that wants to use the teleported value inside a provider 

// App.js
import { useState, useContext } from "react";
import { CountContext } from "./Contex";

function App() {
  const [count, setCount] = useState(0); // Manage state here

  return (
    <CountContext.Provider value={count}>
      <Count setCount={setCount} />
    </CountContext.Provider>
  );
}

function Count({ setCount }) {
  console.log("Countre-render")//-- but it should not be because no element inside is changing the dom ,and this is what state-management fixes
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext); // Access current count value
  return <div>Count: {count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CountContext); // Access count
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;



//state-management >>>> only the people who are using the state variable will  get re-rendered