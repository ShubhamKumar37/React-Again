import { useContext } from "react";
import { createContext } from "react";


export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleDone: (id) => {},
});

export const  TodoProvider = TodoContext.Provider;

export default function useTodo()
{
    return useContext(TodoContext);
}