import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  const [counter,setCounter] = useState(0);
  const addValue = ()=>{
    setCounter(counter +1)
    console.log("Clicked",counter)
  }

  const removeValue = ()=>{
    if(counter !== 0)
    setCounter(counter-1);
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br></br>
     <br></br>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
