import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const TodoForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    function addInput(e) {
        e.preventDefault();

        if (input.trim()) {
            dispatch(addTodo(input));
            setInput("");
        }
    }

    return (
        <form className="bg-gray-900 dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-white dark:text-gray-300 text-sm font-bold mb-2">
                <p className="mb-2">Add Todo</p>
                <input
                    type='text'
                    placeholder='Add work to do'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                />
            </label>

            <button
                type='submit'
                onClick={(e) => addInput(e)}
                className='bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm;

