import { compose, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { appReducers } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const ReduxStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(appReducers,
        composeEnhancers(applyMiddleware(thunk, logger)))

    return store;
}

export default ReduxStore;