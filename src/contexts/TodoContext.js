import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Something",
            checked: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id, todo) => {},
    updateTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext)
}