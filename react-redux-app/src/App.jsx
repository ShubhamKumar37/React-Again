import './App.css'
import TodoForm from './components/todoForm'
import TodoItem from './components/TodoItem'

function App() {


  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white w-full h-screen">
        <TodoForm />
        <TodoItem />
      </div>
    </>
  )
}

export default App

