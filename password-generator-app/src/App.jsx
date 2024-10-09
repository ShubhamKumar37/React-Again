import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from "react"
const App = () => {


  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const passRef = useRef(null);
  
  const generatePassword = useCallback(() =>
  {
    let pass = "";

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numberAllowed) charset += "0123456789";
    if(specialCharAllowed)  charset += "!@#$%^&*()_+";

    for(let i = 0; i < length; i++)
    {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    console.log(pass);
    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed]);

  function copyToClipBoard()
  {
    window.navigator.clipboard.writeText(password);
    passRef?.current?.select();

  }

  useEffect(() =>
  {
    generatePassword();
  }, [length, numberAllowed, specialCharAllowed]);

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
          ref={passRef}
        />


        <button
          onClick={copyToClipBoard}
        className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full'> Copy </button>
      </div>

      <div>

        <label className="flex items-center gap-2">
          Length {length}
          <input
            type='range'
            min={8}
            max={15}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          />

        </label>

        <label className="flex items-center gap-2">
          <p className="text-sm">Number Allowed</p>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }
            }
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </label>

        <label className="flex items-center gap-2">
          <p className="text-sm">Special Character Allowed</p>
          <input
            type='checkbox'
            defaultChecked={specialCharAllowed}
            onChange={() =>
              {
                setSpecialCharAllowed((prev) => !prev);
              }
            }
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </label>
      </div>

    </div>
  )
}

export default App
