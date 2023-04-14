import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(response => {
        setError('')
        setData(response?.data);
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
  }, [])

  if (error) {
    return (
      <div className="App">
        <h1>Error: {error}</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Home page for ecommerce app</p>
      {
        data?.map(item => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
