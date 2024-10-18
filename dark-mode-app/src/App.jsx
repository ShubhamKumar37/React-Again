import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'
import themeProvider from './context/ThemeContext/ThemeContext'
import ThemeBtn from './components/Card/ButtonToggle'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  function lightTheme()
  {
    setThemeMode('dark');
  }
  function darkTheme()
  {
    setThemeMode('light');
  }

  useEffect(() =>
    {
      document.querySelector('html').classList.remove('dark', 'light');
      document.querySelector('html').classList.add(themeMode);    
    }, [themeMode])

  return (
    <themeProvider value={{ lightTheme, darkTheme}}>
      <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-300 gap-4'>
        <ThemeBtn />
        <Card />
      </div>
    </themeProvider>
  )
}

export default App
