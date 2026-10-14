import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetching data from the Express server
    fetch('http://localhost:3000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem', fontFamily: 'sans-serif' }}>
      <h1>Vite + React Frontend</h1>
      <p>
        Response from server: <strong>{message || 'Connecting to server...'}</strong>
      </p>
    </div>
  );
}

export default App;