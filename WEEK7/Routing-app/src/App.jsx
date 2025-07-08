import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
/*In React, you cannot use the useNavigate hook or any other React Router hooks like useLocation, useParams, etc., outside of a Router component like BrowserRouter because they need the routing context to work properly. */
function App() {
  return (
    <BrowserRouter>  {/* Wrapping entire component inside BrowserRouter */}
      <div style={{color: "blue"}}>
        <NavigationButtons />
      </div>
      <Routes>
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

function NavigationButtons() {
  const navigate = useNavigate();  // This works now because it's inside BrowserRouter
  return (
    <>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dash")}>Dashboard Page</button>
    </>
  );
}

export default App;
