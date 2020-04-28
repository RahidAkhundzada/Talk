import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducer/index';
import {createLogger} from 'redux-logger';

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(createLogger()),
);
