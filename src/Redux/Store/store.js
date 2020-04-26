import {createStore} from 'redux';
import rootReducer from '../Reducer/index';

export const store = createStore(rootReducer);
