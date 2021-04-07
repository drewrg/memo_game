import { createStore } from 'redux';
import rootReducer from '../reducers';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import saga from 'redux-saga'


const middlewares = [];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))


export default store;