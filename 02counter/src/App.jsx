import { useState } from 'react' // Using HOOKS
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  let addValue = () => {
    // counter = counter + 1;
    if(counter >= 20) {
      setCounter(20)
    }
    else{
      setCounter(counter+1)
    }
  }

  let removeValue = () => {
    if(counter <= 0){
      setCounter(0)
    }
    else{
      setCounter(counter-1)
    }
  }

  
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
