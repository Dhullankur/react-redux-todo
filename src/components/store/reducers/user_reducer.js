import {
    LOGIN_USER,
    REGISTER_USER,
    LOG_OUT,
    FIND_USER
} from '../types';

const defaultUserState = () => {
    const token = localStorage.getItem('token');
    const user = token ? JSON.parse(localStorage.getItem('user')) : null;
    return {
        token, user
    }
}

export const userReducer = (state = defaultUserState(), action) => {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, message: action.payload };
        case LOGIN_USER:
            return {...state, ...action.payload };
        case LOG_OUT:
            localStorage.removeItem('token');
            localStorage.removeItem("user");
            return {...state, user: null, token: null};
        default:
            return state
    }
}