import React from 'react'
import {useState} from "react"
const App = () => {


  const [password, setPassword] = useState("");

  return (
    <div className='w-full h-screen bg-gray-600 text-white flex flex-col gap-4'>
      <h1 className='text-center'>Generate Password</h1>

      <div className='flex flex-row gap-[1rem] w-fit mx-auto'>
        <input
          type="text" 
          value={password}
          placeholder='Here will be your password'
          readOnly
          className='bg-gray-300 text-black p-3 rounded-lg'
         />


         <button className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full'> Copy </button>
      </div>

    </div>
  )
}

export default App
