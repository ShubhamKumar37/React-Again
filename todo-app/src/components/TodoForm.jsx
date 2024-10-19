import React, { useState } from 'react'
import useTodo from '../contexts/todoContext';

const TodoForm = () => {
    const [todo, setTodo] = useState('');
    const { addTodo } = useTodo();

    function add(event) {
        event.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo("");
    }

    return (
        <form onSubmit={add} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
            <input 
                placeholder='Enter todo'
                type='text'
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <button 
                type='submit' 
                className="mt-2 w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm;
