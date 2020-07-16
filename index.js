/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store/store';
import {Pstore} from './src/Redux/Store/store';
import {PersistGate} from 'redux-persist/integration/react';

const MainApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Pstore}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
