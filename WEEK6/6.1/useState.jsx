import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // useState is used to create a state variable `count`

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

