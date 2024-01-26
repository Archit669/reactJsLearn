import { useState } from 'react'
import './App.css';


function App() {

  const [counter, setCounter] = useState(0);
  
  // function to increment the value
  function increaseCounter(){
    setCounter(prevCounter =>{
        if (prevCounter == 20) return prevCounter;
        return  prevCounter+1;
    } );
  }

  // function to decrement the value
  function decreaseCounter(){
    setCounter(prevCounter =>{
       if (prevCounter == 0) return prevCounter;
       return  prevCounter-1;
    } );
  }


  return (
    <>
      <div className="container">
        <h1>counter App</h1>
        <p className= "counter-number">{counter}</p>
        <button onClick={increaseCounter}>add</button>
        <button onClick={decreaseCounter}>remove</button>
      </div>
    </>
  )
}

export default App
