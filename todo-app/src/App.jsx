import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/todoContext'
import { TodoForm, TodoItem } from './components';

function App() {
  const [todo, setTodo] = useState([]);

  function addTodo(Todo)
  {
    setTodo((prev) =>
      {
        if(prev)
        {
          return [{id: Date.now(), ...Todo}, ...prev]
        }
        return {id: Date.now(), ...Todo}

      }
    );
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
      const arr = prev.filter((item) => item.id !== id);
      if(arr.length === 0) localStorage.removeItem("Todo");
      return arr;
    })
  }

  function toggleDone(id)
  {
    setTodo((prev) =>
    {
      let arr = prev.map((item) => item.id === id ? {...item, completed: !item.completed} : {...item});
      return arr; 
    })
  }

  useEffect(() =>
    {
      const storedData = JSON.parse(localStorage.getItem("Todo") === 'undefined' ? '[]' : localStorage.getItem("Todo"));
      if(storedData && storedData.length > 0) setTodo(storedData);
    }, []);

    useEffect(() =>
      {
        localStorage.setItem("Todo", JSON.stringify(todo));
      }, [todo]);

  return (
    <TodoProvider value={{todo, addTodo, updateTodo, deleteTodo, toggleDone}}>
      <div className='bg-gray-900 w-full h-screen flex flex-col gap-5'>
        <TodoForm />
        <div>

        {
          todo && todo.map((item) =>
            {
              return( <div key={item.id} >
              <TodoItem todo={item} />
            </div>)
          })
        }
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
