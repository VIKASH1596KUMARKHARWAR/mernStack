// npm run dev to run it

//npm run build to get a deployable index.js by using which i can have a single page executable file
//open
//serve

// import React, { useState } from 'react';

// let state = {
//   count: 0,
// };

// function App() {
//   const [, setRender] = useState(); // Local state to force re-render

//   const incrementCount = () => {
//     state.count = state.count + 1; // Increment the count
//     setRender({}); // Trigger a re-render
//   };

//   return (
//     <div>
//       hi there, how are you!!
//       what's going on ??
//       <button onClick={incrementCount}>
//         counter {state.count}
//       </button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0); // Using useState to manage count

//   const incrementCount = () => {
//     setCount(count + 1); // Increment the count
//   };

//   return (
//     <div>
//       hi there, how are you!!
//       what's going on ??
//       <button onClick={incrementCount}>
//         counter {count}
//       </button>
//     </div>
//   );
// }

// export default App;

//creating our own custom buttons  and using props
import {useState} from 'react';

function App () {
  const [count, setCount] = useState (0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

function CustomButton (props) {
  function onClickHandler () {
    props.setCount (props.count + 1);
  }

  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  );
}

export default App;
