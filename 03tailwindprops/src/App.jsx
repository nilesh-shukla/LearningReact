import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)
  let arr = [1,2,3]
  let myObj={
    username: "nilesh",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card username="chaiaurcode" btnText="Click Me" />      
      <Card username="nilesh" />
    </>
  )
}

export default App
