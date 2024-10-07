import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('gray');

  return (
    <div className={`w-full h-screen bg-${color}-500`}>
      <div className='flex flex-row gap-[2rem] w-fit mx-auto'>
        <button className='bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full'
          onClick={() => setColor('green')}
        >Green</button>
        <button className='bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full'
          onClick={() => setColor('red')}
        >Red</button>
        <button className='bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full'
          onClick={() => setColor('blue')}
        >Blue</button>
      </div>

    </div>
  )
}

export default App
