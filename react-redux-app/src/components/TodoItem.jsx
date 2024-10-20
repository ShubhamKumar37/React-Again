import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../features/todo/todoSlice';

export default function TodoItem() {

    const todoData = useSelector((state) => state.todoSlice.todos);
    const dispatch = useDispatch();

  return (
    <ul className="list-disc pl-5 space-y-2">
        {
            todoData && todoData.map((item) => 
            (
                <li key={item?.id} className="flex items-center justify-between">
                    <p className="text-lg">
                        {item?.text}
                    </p>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => dispatch(deleteTodo(item.id))}
                    >Delete</button>
                </li>
            ))
        }

    </ul>
  )
}

