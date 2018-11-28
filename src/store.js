import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import StockListReducer from './reducers/StockList/StockListReducer';

const store = createStore(
    combineReducers({ StockListReducer }),
    {},
    applyMiddleware(thunk, logger)
);

export default store;