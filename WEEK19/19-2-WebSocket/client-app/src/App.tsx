import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<null |WebSocket>(null);
  const [messages, setMessages] = useState([]); // Initialize messages state

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");

    newSocket.onopen = () => {
      console.log("WebSocket connected");
    };

    newSocket.onmessage = (message) => {
      console.log("Received message:", message.data);
      setMessages((prevMessages) => [...prevMessages, message.data]); // Append new message
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
      console.log("WebSocket connection closed");
    };
  }, []);

  return (
    <div>
      {socket ? (
        <div>
          <h1>Hi there!</h1>
          <h2>Messages:</h2>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
