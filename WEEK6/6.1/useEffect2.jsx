import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchData = async () => {
      try {
        // Await the result of the axios request
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // Set the data once the response is received
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default FetchData;

