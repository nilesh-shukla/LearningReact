import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>

          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer' style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>Black</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "olive"}} onClick={()=>setColor("olive")}>Olive</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>

          <button className='outline-none px-4 py-1 rounded-full text- shadow-lg cursor-pointer' style={{backgroundColor: "white"}} onClick={()=>setColor("white")}>White</button>

        </div>
      </div>
     </div>
  )
}

export default App
