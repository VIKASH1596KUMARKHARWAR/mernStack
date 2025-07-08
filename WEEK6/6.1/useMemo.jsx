/*Memoizes the result of a function to optimize performance.
Use Case: Avoiding expensive calculations on every render.*/

import React, { useMemo, useState } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);

  // Memoizing the calculation result
  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <p>Calculated Value: {calculatedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function expensiveCalculation(count) {
  console.log('Expensive calculation running...');
  return count * 2;
}

