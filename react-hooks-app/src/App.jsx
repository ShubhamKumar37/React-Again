import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(14);
  // let counter = 15;

  function addValue()
   { // setCounter(counter + 1);  
    // setCounter(counter + 1);  
    // setCounter(counter + 1);  
    // setCounter(counter + 1);  
    // setCounter(counter + 1);  


    setCounter(prevCounter => prevCounter + 1);  
    setCounter(prevCounter => prevCounter + 1);  
    setCounter(prevCounter => prevCounter + 1);  
    setCounter(prevCounter => prevCounter + 1);  
    setCounter(prevCounter => prevCounter + 1);  
    console.log(counter);
  }

  function removeValue()
  {
    setCounter(counter - 1);
    console.log(counter);
  }


  return (
    <>
      <div>
          <h1>React course with hitesh {counter}</h1>
          <h2>Counter value : {counter} </h2>
          <button onClick={addValue}>Add value</button> { "  "}
          <button onClick={removeValue}>Remove value</button>
          <p>Footer:  {counter}</p>
      </div>
    </>
  )
}

export default App
