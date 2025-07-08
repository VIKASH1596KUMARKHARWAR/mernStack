import React, { useContext } from 'react';

const UserContext = React.createContext();

function UserProfile() {
  const user = useContext(UserContext);  // Consume the context value

  return <h1>Welcome, {user.name}!</h1>;
}

function App() {
  const user = { name: 'John Doe' };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

