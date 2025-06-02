import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passref = useRef(null)

  const passGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str = str+"0123456789"
    if (charAllowed) str = str+"!@$$%^&*-_+=[]{}~`"

    for(let i=1; i<=length; i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
}, [length, numAllowed, charAllowed, setPassword])

  const copyPassToClipboard = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect(() => {
  passGenerator()
}, [length, numAllowed, charAllowed, passGenerator])
  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-center bg-gray-700'>

        <h1 className='text-white text-center my-4'>Password Generator</h1>
              
              <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input 
                type="text" 
                value={password}
                className='outline-none w-full py-1 px-3 bg-white'
                placeholder='Password'
                readOnly
                ref={passref}
                />

                <button 
                onClick={copyPassToClipboard}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-950'>Copy</button>

              </div>

              <div className='flex text-sm gap-x-2 '>

                <div className='flex items-center gap-x-1 text-orange-400'>

                  <input 
                  type="range"
                  min={6}
                  max={35}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => {setlength(e.target.value)}}
                  />
                  <label>Length: {length}</label>

                </div>

                <div className='flex items-center gap-x-1 text-orange-400'>

                  <input 
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id='numberInput'
                  onChange={() => {
                    setAllowed((prev) => !prev);
                  }}
                  />
                  <label htmlFor='numberInput'>Numbers</label>

                  <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id='charInput'
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                  />
                  <label htmlFor='charInput'>Characters</label>

                </div>
              </div>
      </div>
    </>
  )
}

export default App
