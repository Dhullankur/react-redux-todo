import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO_ITEM,
    ADD_TODO_API,
    DELETE_TODO_API,
    FIND_TODO
} from '../types';

const defaultTODO = {
    todos: []
}


const todoReducer = (state = defaultTODO, action) => {
    switch (action.type) {
        // case ADD_TODO:
        //     return {
        //         todos: [...state.todos, action.payload]
        //     }
        case ADD_TODO_API:
            return {
                todos: [...state.todos, action.payload]
            }
        // case DELETE_TODO:
        //     const deleteitem = state.todos.splice(action.payload, 1);
        //     // console.log(state.todos)
        //     return {
        //         todos: [...state.todos]
        //     }
        case DELETE_TODO_API:
            const todos = state.todos.filter(item => item.id !== action.payload);
            // console.log(state.todos)
            return {
                todos
            }
        // case EDIT_TODO_ITEM:
        //     state.todos[action.payload.index].title = action.payload.data.title;
        //     state.todos[action.payload.index].description = action.payload.data.description;
        //     return {
        //         todos: [...state.todos]
        //     }
        case EDIT_TODO_ITEM:
            console.log(action.payload);
            const findTodo = state.todos.find(item => item.id === action.payload.id)
            findTodo.title = action.payload.title;
            findTodo.description = action.payload.description;
            return {
                todos: [...state.todos]
            }
        case FIND_TODO:
            return {
                todos: action.payload.todos
            }
        default:
            return state;
    }
}
export default todoReducer;