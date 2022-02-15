import { combineReducers } from "redux";
import todoReducer from './todo_reducer'
import { userReducer } from "./user_reducer";


export const appReducers = combineReducers({
    todoReducer,
    userReducer
})
