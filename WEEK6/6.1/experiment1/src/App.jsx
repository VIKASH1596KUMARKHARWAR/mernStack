/*Create a react app that has a
1. Header component that takes a title as a prop and renders it inside a div
2. The top level App component renders 2 Headers
*/

// =======>Re-rendering

/*Re-rendering happens when React updates the DOM to reflect changes in component state, props, or context.
How Re-rendering Works?
React re-renders the affected component and its child components.
React’s Virtual DOM optimizes updates to minimize DOM manipulation.
Optimizing Re-rendering:
Use React.memo to prevent re-renders for functional components.
Use useCallback or useMemo to avoid creating new function or object references unnecessarily.
Batch state updates to reduce re-renders.
Important Notes:
Re-rendering does not always mean the DOM is updated (React optimizes this via reconciliation).
Be cautious of passing large props or complex state, as it can slow down rendering.*/

//by this both the header is being re-renders need to fix it.(check via - react dev tool)

/*
A re-render means that
1. React did some work to calculate what all should update in this component
2. The component actually got called (you can put a log to confirm this)
3. The inspector shows you a bounding box around the component
It happens when
1. A state variable that is being used inside a component changes >>> > this is the most common when setState like. setTitle is called (from useState) it does for all whole elements in its parents , irrespective of whether other children have  used the title or not
2. A parent component re-render triggers all children re-rendering
*/

/*You want to minimise the number of re-renders to make a highly optimal react app
The more the components that are getting re-rendered, the worse*/

// what is re rendering in react ??? learn form it
// import React, { useState } from 'react';

// function App() {
//   const [title,setTitle] = useState("my name is harkirat")

//   function updateTitle(){
//     setTitle("my name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title </button>
//       <Header title={title} />
//       <Header title="Header 2" />
//       <Header title="Header 3" />
//       <Header title="Header 4" />
//       <Header title="Header 5" />
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }
// export default App;





// WAY 1 >> PUSH THE STATE DOWN





// import React, {useState} from 'react';

// function App () {
//   return (
//     <div>
// <HeaderWithButton/>
//       <Header title="Header 2" />
//       <Header title="Header 3" />
//       <Header title="Header 4" />
//       <Header title="Header 5" />
//     </div>
//   );
// }

// function HeaderWithButton () {
//   const [title, setTitle] = useState ('my name is harkirat');

//   function updateTitle () {
//     setTitle ('my name is ' + Math.random ());
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title </button>
//       <Header title={title} />
//     </div>
//   );
// }

// function Header({title}) {
//   return <div>{title}</div>;
// }
// export default App;



// WAY2 >> memo lets you skip re-rendering a component when its props are unchanged.

import React, { useState,memo } from 'react';

function App() {
  const [title,setTitle] = useState("my name is harkirat")

  function updateTitle(){
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title </button>
      <Header title={title} />
      <Header title="Header 2" />
      <Header title="Header 3" />
      {/* <Header title={title} /> */}
      <Header title="Header 4" />
      <Header title="Header 5" />

    </div>
  );
}

// const Header = memo(function ({ title }) {
//   return <div>{title}</div>;
// })

const Header = memo(function ({ title }) {
  console.log(`Rendering: ${title}`);
  return <div>{title}</div>;
});

export default App;
