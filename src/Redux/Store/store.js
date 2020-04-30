import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducer/index';
import {createLogger} from 'redux-logger';
//import {persistStore, persistReducer} from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
//import storage from 'redux-persist/lib/storage';
//import {PersistGate} from 'redux-persist/integration/react';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['Calc'],
// };

//const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(createLogger()),
);
