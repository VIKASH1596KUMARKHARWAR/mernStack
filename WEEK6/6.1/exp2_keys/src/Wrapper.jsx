//copied it to app.jsx and then se the effect

function Wrapper () {
  return (
    <div style={{display: 'flex'}}>
      <Card>
        hi there
      </Card>
      <div>
        <div>
          hello from the 2nd card
        </div>
      </div>
      <Card>
        <div>
          hello from the 3nd card
        </div>
      </Card>
    </div>
  );
}

// since function name is Card so its props or child will be the Card element only not hte other elements
// In React, the children prop is a special prop that allows you to pass content between the opening and closing tags of a component:


function Card({children}) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: 10,
        margin: 10,
        background:"blue"
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
