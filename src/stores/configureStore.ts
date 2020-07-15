import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
};

const middleware = [];
middleware.push(thunk);

if (__DEV__) {
  middleware.push(createLogger({ diff: true }));
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

const configureStore = () => {
  return { store, persistor };
};

export default configureStore;
