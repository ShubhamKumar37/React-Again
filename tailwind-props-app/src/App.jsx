import './App.css'
import Card from './components/Card'

function App() {
  const obj = {
    name: "Shubham",
    age: 22
  }
  return (
    <>
      <div className='relative text-red-600 bg-green-700 p-3 rounded'>
        <h1>Hi this is shubham kumar</h1>
        {/* {Card()} */}
        <Card obj={obj} />
        <Card   />
      </div>
    </>
  )
}

export default App
