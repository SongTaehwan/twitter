import 'react-native-gesture-handler';
import * as React from 'react';
import configureStore from './stores/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const { store, persistor } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Navigator */}
      </PersistGate>
    </Provider>
  );
}
