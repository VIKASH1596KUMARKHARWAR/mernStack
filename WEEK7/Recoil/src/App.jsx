import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App() {

  return (
    <RecoilRoot>
      <Count />
      </RecoilRoot> 
  );
}

function Count() {
  console.log("Countre-render")
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom); 
  return <div>Count: {count}
  <b><EvenCountRenderer/></b>
  </div>;
}


/*
//ugly way ==> lets optimise it using memo, not good that mcuh.now lets use selectors
function EvenCountRenderer() {
  console.log("even-rerender");//useMemo render only when count changes

  const count = useRecoilValue(countAtom); 
  const isEven = useMemo(()=>{
    return count % 2 === 0;
},[count])

  
  // return <div> {count % 2 === 0 ? "  its Even Count" :null}</div>
  return <div> {isEven ? "  its Even Count" :null}</div>
}

*/



function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div> {isEven ? "  its Even Count" :null}</div>
}




//one problem is that the button also re-renders so need ot fix it (re-render because its usage the count atom) >>> to fix? 
function Buttons() {
  // const [count,setCount]=useRecoilState(countAtom) ; 

  const setCount = useSetRecoilState(countAtom);
  
  console.log("button-rerender");
  return (
    <div>
      {/* <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button> */}


{/*  nw its only changing the setcount when the button is clicked wiTHOUT NEED OF COUNT explicitly*/}
<button onClick={() => setCount(count=>count - 1)}>Decrease</button>
<button onClick={() => setCount(count=>count + 1)}>Increase</button>
    </div>
  );
}

export default App;


//state-management >>>> only the people who are using the state variable will  get re-rendered




// selectors >> let if count if even render a text its even if not even reurn null