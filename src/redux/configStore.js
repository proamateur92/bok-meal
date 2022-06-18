import { createStore, combineReducers } from 'redux';
import cart from './module/cart';

const rootReducer = combineReducers({ cart });
const store = createStore(rootReducer);

export default store;
