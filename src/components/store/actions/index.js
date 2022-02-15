import * as api from '../../../api'
import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO_ITEM,
    REGISTER_USER,
    LOGIN_USER,
    ADD_TODO_API,
    DELETE_TODO_API,
    FIND_USER,
    LOG_OUT,
    FIND_TODO,
    EDIT_TODO
} from '../types';

// export const addtodo = (data) => {
//     return {
//         type: ADD_TODO,
//         payload: data
//     }
// };

// export const deleteTodo = (data) => ({
//     type: DELETE_TODO,
//     payload: data
// });

// export const editedtodoData = (data, index) => {
//     return {
//         type: EDIT_TODO_ITEM,
//         payload: {
//             data, index
//         }
//     }
// };

export const registerUserTODO = (data) => async (dispatch) => {
    const message = await api.registerUser(data)
    console.log(message)
    dispatch({
        type: REGISTER_USER,
        payload: message
    })
};

export const loginUser = (data) => async (dispatch) => {
    try {
        const user = await api.LoginUserApi(data);
        console.log(user);
        dispatch({
            type: LOGIN_USER,
            payload: {
                ...user,
                message: ''
            }
        })
    } catch (error) {
        dispatch({
            type: LOGIN_USER,
            payload: {
                user: null,
                token: null,
                message: error.message
            }
        })
    }
}

///// todo ///

export const addtodoApi = (data, token) => async (dispatch) => {
    const todo = await api.addTodo(data, token);
    dispatch({
        type: ADD_TODO_API,
        payload: todo
    })
};

export const deleteTodoApi = (id) => async (dispatch, getState) => {
    const { token } = getState().userReducer;
    await api.deleteTodoApi(id, token);
    dispatch({
        type: DELETE_TODO_API,
        payload: id
    })
}

export const logout = () => async (dispatch) => {
    dispatch({
        type: LOG_OUT,
        payload: {}
    })
}

export const getAllToDo = () => async (dispach, getState) => {
    const token = getState().userReducer.token
    const data = await api.getAllToDoApi(token);
    dispach({
        type: FIND_TODO,
        payload: { todos: data.docs }
    });
};

export const editTodo = (todo) => async (dispatch, getState) => {
    const token = getState().userReducer.token;
    const editedTODO = await api.editTodoApi(todo, token);
    dispatch({
        type: EDIT_TODO_ITEM,
        payload: todo
    })
}