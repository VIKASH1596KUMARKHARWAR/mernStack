// import { useState } from 'react';

// //without the useMemo the whole for loop wil also render whenever we will even only click on the counter
// //so we will use the useMemo to memoize the result of the for loop so that it will NOT RE-Render the unchanged thing

// function UseMemo() {
//     const [counter, setCounter] = useState(0);
//     const [inputValue, setInputValue] = useState(1);

//     let count = 0;
//     for (let i = 1; i <= inputValue; i++) {
//         count = count + i;
//     }

//     return (
//         <div>
//             {/* using the input value  states */}
//             <input
//                 onChange={function (e) {
//                     setInputValue(e.target.value);
//                 }}
//                 placeholder={'Find sum from 1 to n'}
//             />
//             <br />
//             Sum from 1 to {inputValue} is {count}
//             <br />

//             {/* using the counter states */}
//             <button
//                 onClick={() => {
//                     setCounter(counter + 1);
//                 }}
//             >
//                 Counter ({counter})
//             </button>
//         </div>
//     ); 
// }

// export default UseMemo;


import { useState, useMemo } from 'react';

function UseMemo() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    // Memoize the sum calculation. It will only recompute when inputValue changes.
    const sum = useMemo(() => {
        console.log("memo got called");
        let count = 0;
        for (let i = 1; i <= inputValue; i++) {
            count = count + i;
        }
        return count;
    }, [inputValue]); // Only recompute when inputValue changes

    return (
        <div>
            {/* Input to change the value for which we want to find the sum */}
            <input
                onChange={function (e) {
                    setInputValue(Number(e.target.value)); // Convert input to number
                }}
                placeholder={'Find sum from 1 to n'}
                value={inputValue}  // Bind the input to the state
            />
            <br />
            Sum from 1 to {inputValue} is {sum}
            <br />

            {/* Counter button that doesn't affect the sum calculation */}
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Counter ({counter})
            </button>
        </div>
    ); 
}

export default UseMemo;
