import { useState, useCallback } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str = str+"0123456789"
    if(charAllowed) str = str+"!@#$%^&*()_-+={}[]:;'<,>.?/~"
    for(let i=1; i<=length; i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char)
    }
    setPassword(pass)
}, [length, numAllowed, charAllowed, password])


  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orangr-500 bg-gray-700'>
              <h1 className='text-2xl text-center'>Password Generator</h1>
              <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input 
                    type="text"
                    value={password}
                    className='outline-none w-full py-1 px-3'
                    placeholder='Password'
                    readOnly
                 />
              </div>
      </div>
    </>
  )
}

export default App
