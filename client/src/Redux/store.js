import { createStore } from 'redux';
import entriesReducer from './Entries/entriesReducer';

const store = createStore(entriesReducer);
export default store; 