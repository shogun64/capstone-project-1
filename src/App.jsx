import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const FetchButton = ({ fetchData }) => {
  return (
    <button onClick={fetchData}>Get a New Image</button>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let gameID = 31540

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/games?title=batman`
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <FetchButton fetchData={fetchData}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {error}
      </p>
    </>
  )
}

export default App
