/*useCallback: Returns a memoized version of a callback function that only changes if one of the dependencies has changed.
Use Case: Prevent unnecessary re-renders by memoizing callback functions that are passed down as props.*/

/*note for react if parents rerender the child rerender by default, so to prevent the child re-render we use memo over the child and if we are passing the the static function as props(props kuch bhi le shakta h) then the child should not rerender (as being static not changed) but react be so we use the useCallback  to prevent this, with some dependencies when we need to render it(optional)
hence we memoise the whole function(and unless the implementation not change this will not be rerender (even though the fn name change it will not render again)*/

import React, {
 useState, useCallback } from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} />
    </div>
  );
}

