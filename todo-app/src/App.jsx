import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/todoContext'

function App() {
  const [todo, setTodo] = useState([]);

  function addTodo(todo)
  {
    setTodo((prev) => [{id: Date.now(), ...todo}, ...prev]);
  }

  function updateTodo(id, todo)
  {
    setTodo((prev) =>
    {
      prev.map((item) => item.id === id ? todo : item)
    })
  }

  function deleteTodo(id)
  {
    setTodo((prev) =>
    {
      prev.filter((item) => item.id !== id);
    })
  }

  function toggleDone(id)
  {
    setTodo((prev) =>
    {
      prev.map((item) => item.id === id ? {...prev, completed: !item.completed} : item);
    })
  }

  useEffect(() =>
    {
      const storedData = JSON.parse(localStorage.getItem("Todo"));
      if(storedData && storedData.Todo !== '[]') setTodo(storedData);
    }, []);

    useEffect(() =>
      {
        localStorage.setItem("Todo", JSON.stringify(todo));
      }, [todo]);

  return (
    <TodoProvider value={{todo, addTodo, updateTodo, deleteTodo, toggleDone}}>
      <div>
        Hello
      </div>
    </TodoProvider>
  )
}

export default App
