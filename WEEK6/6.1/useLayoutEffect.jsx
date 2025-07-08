/*useLayoutEffect is a React hook that is similar to useEffect, but with a crucial difference in timing. Both hooks are used to run side effects, but they differ in when the effect is executed relative to the DOM updates.

Key Difference Between useEffect and useLayoutEffect:
		useEffect runs asynchronously after the DOM has been updated and painted on the screen. This means that updates triggered by the effect do not block the paint process and are typically used for tasks like data fetching, subscriptions, or timers.
		
		useLayoutEffect, on the other hand, runs synchronously after all DOM mutations but before the browser has painted. This ensures that the layout changes are applied before the screen is rendered, preventing any visual flickering or layout shifting.

When to Use useLayoutEffect:
useLayoutEffect is useful when you need to measure or mutate the DOM immediately after changes but before the browser paints. This could be the case when you want to:

Read layout properties (e.g., getting the dimensions of a DOM element).
Perform actions that affect the layout or visuals of the page.
Avoid flickering by ensuring that DOM updates are applied before the render.
Syntax of useLayoutEffect:
*/
import React, { useLayoutEffect, useState, useRef } from 'react';
function MyComponent() {
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    // This runs synchronously after the DOM has been updated, but before painting
    const divHeight = divRef.current.getBoundingClientRect().height;
    setHeight(divHeight);
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div>
      <div ref={divRef} style={{ height: '100px', backgroundColor: 'lightblue' }}>
        This is a box.
      </div>
      <p>The height of the div is: {height}px</p>
    </div>
  );
}

export default MyComponent;

/*
Explanation:
useLayoutEffect is used to measure the height of a div after it has been rendered but before the browser paints the screen. This allows us to get accurate measurements and avoid layout shifting.
useRef is used to reference the DOM element (divRef) so we can access its properties.
getBoundingClientRect() provides the size and position of the element, which is then stored in the state using setHeight.


When to Avoid useLayoutEffect:
Since useLayoutEffect runs synchronously, it can block the rendering process and lead to performance issues, especially if the effect involves expensive operations. This is why it's recommended to use useEffect by default, and only fall back to useLayoutEffect when absolutely necessary.

In summary:
Use useLayoutEffect when you need to measure or synchronize DOM mutations before the browser paints, preventing any flickering.
Use useEffect for most other side effects that don’t need to block the render cycle (e.g., fetching data, event listeners).
Important Notes:
Avoid using useLayoutEffect on the server-side rendering (SSR) because it requires layout-related tasks that don’t exist in a non-browser environment. React will automatically switch to useEffect on the server-side.
*/