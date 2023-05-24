//Redux Setup
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/index';

const loggerMiddleware = createLogger();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        thunkMiddleware
        , loggerMiddleware // comment this line out on final build
    ]
});