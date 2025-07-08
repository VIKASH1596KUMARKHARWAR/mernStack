import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Lazy-loaded component
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
  return (
    <BrowserRouter>
    <div style={{color: "blue"}}>
        <NavigationButtons />
      </div>
      <Suspense fallback={<div>Loading...</div>}> {/* Suspense wrapper */}
        <Routes>
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Suspense>
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


// React.lazy: This function is used to dynamically import components in React. When you use React.lazy, React will only load the component when it is needed (i.e., when the route is matched). This helps in reducing the initial bundle size and speeds up the page load.


/*

Default Behavior Without Lazy Loading:
When you import components like Dashboard and Landing directly (not using React.lazy), all the components and their dependencies are bundled and sent to the browser on the first load.
Even if you're only rendering the Landing component initially, the Dashboard component is still included in the initial bundle.
Lazy Loading with React.lazy:
With lazy loading (React.lazy), only the JavaScript for the currently visited route is loaded when the app initializes.
For example, if you start on /, only the Landing component will be loaded.
If you navigate to /dashboard, the Dashboard component will be fetched and loaded on-demand.
Server Behavior:
When the server sends the app's initial HTML and JavaScript, it includes only the static files (like the main app bundle).
Without lazy loading, all components are bundled together in a single large file, leading to longer initial load times.
With lazy loading, the server sends the main JavaScript bundle (small) initially, and additional code for lazy-loaded components is fetched when needed.
How Lazy Loading Improves Performance:
Reduced Initial Load Time: Only the necessary code for the initial route is sent from the server.
On-Demand Loading: Additional routes and components are fetched when the user navigates to them.
Better User Experience: Users don’t wait for the entire app to load at once.

*/

