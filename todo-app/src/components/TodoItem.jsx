import React, { useState } from 'react'
import useTodo from '../contexts/todoContext';

const TodoItem = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleDone } = useTodo();

    function editTodo() {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
    }

    function todoComplete() {
        toggleDone(todo.id);
    }

    return (
        <div className="flex items-center justify-between p-3 border-b border-gray-300 gap-3 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-600">
            <div className="flex items-center gap-2 w-[80%]">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={todoComplete}
                    className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                
                <input
                    value={todoMsg}
                    type="text"
                    readOnly={!isTodoEditable}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    className={` w-[80rem] p-2 border border-gray-300 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${todo.completed ? 'bg-green-100 text-green-700 line-through dark:bg-green-900 dark:text-green-400' : 'bg-red-100 text-gray-700 dark:bg-red-900 dark:text-red-400'}`}
                />
            </div>

            <div className="flex items-center gap-2">
                {!todo.completed && (
                    <button
                        onClick={() => {
                            if (todo.completed) return;
                            if (isTodoEditable) editTodo();
                            setIsTodoEditable(!isTodoEditable);
                        }}
                        disabled={todo.completed}
                        className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        {isTodoEditable ? 'Save' : 'Edit'}
                    </button>
                )}
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 transition-all duration-300 dark:bg-red-600 dark:hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoItem;
