import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Sample from './day6';


function App() {
  const [data, setData] = useState(1);

  useEffect(() => {
    // this function will get triggered whenever something changes in dependency array
    console.log('useEffect >> ', data);
    // setData(data+1) // this will create an infinite loop and crash the app
  }, [data]) // dependency array

  const updateItem = () => {
    // state updates are asynchronous
    setData((currentData) => currentData + 1);

    // console.log('Immediate >> it wont change >>', data);
  }

  return (
    <>
      <Navigation />
      <button onClick={updateItem}>Count: {data}</button>
      <Sample newTitle='from Index' count={1} />
    </>
  )
}

export default App;
