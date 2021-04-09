import { createStore } from 'redux';
import rootReducer from '../reducers';
// import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'


// const middlewares = [];
const store = createStore(rootReducer, composeWithDevTools())


export default store;