import TodoTypes from './TodoTypes';

const TodoReducer = (state, action) => {
    switch(action.type) {
        case TodoTypes.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload.data],
                title: ''
            }
        case TodoTypes.REMOVE_TODO:
            return {
                ...state,
                todoList: removeItemFromTodoList(state.todoList, action.payload.data)
            }
        case TodoTypes.TODO_NAME:
            return {
                ...state,
                title: action.payload.data
            }
        default:
            return state;
    }
}

export default TodoReducer;

const removeItemFromTodoList = (data, removeItem) => {
    return data.filter((item) => item.id !== removeItem.id )
}