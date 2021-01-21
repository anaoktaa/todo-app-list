import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { TodoContext  } from './context/TodoState';

const App = () => {
    const { title, todoList, todoName, addTodo, removeTodo } = useContext(TodoContext)
    const handelChange = e => {
        todoName(e.target.value)   
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!title) return;
        addTodo(title)
    }

    const handleRemove = data => {
        removeTodo(data)
    }

    return (
        <div className='container'>
            <h1>Things to do</h1>
            <form className='input-container' onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={handelChange}/>
                <button onSubmit={handleSubmit}>Add to list</button>
            </form>
            <div className='to-do-container'>
                {
                    todoList.map((todo) => (
                        <div className='to-do-wrapper' key={todo.id}>
                            <span>{todo.title}</span> &nbsp;
                            <FontAwesomeIcon onClick={() => handleRemove(todo)} style={{cursor: 'pointer'}} icon={faTrashAlt} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default App;