import React, { createContext, useReducer } from 'react';

import TodoReducer from './TodoReducer';
import TodoTypes from './TodoTypes';

export const TodoContext = createContext({
    title: '',
    todoList: [],
    addTodo: () => {},
    todoName: () => {},
    removeTodo: () => {}
});

const TodoState = ({ children }) => {
    const initialState = {
        todoList: [],
        title: ''
    }

    const [state, dispatch ] = useReducer(TodoReducer, initialState)
    const { todoList, title } = state;
 
    const addTodo = (titleName) => {
        const data = {
            id: new Date().getTime(),
            title: titleName
        }
        dispatch({ type: TodoTypes.ADD_TODO, payload: {data}})
    }

    const removeTodo = (data) => {
        dispatch({ type: TodoTypes.REMOVE_TODO, payload: { data } })
    }


    const todoName = data => {
        dispatch({ type: TodoTypes.TODO_NAME, payload: { data }})
    }
     
    return (
        <TodoContext.Provider value={{
            todoList,
            title,
            addTodo,
            todoName,
            removeTodo

        }}>
            {children}
        </TodoContext.Provider>
    )
};

export default TodoState;