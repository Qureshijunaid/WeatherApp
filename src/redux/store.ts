import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import {
  persistReducer,
  persistStore,
  Storage,
} from 'redux-persist';

import weatherReducer from './slice/weatherSlice';


// local storage for redux persist using react native mmkv
const storage = new MMKV();

export const reduxPersistStorage: Storage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);

    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};



// persist config
const persistConfig = {
  key: 'root',
  storage: reduxPersistStorage,
  transforms: [
  ],
  blacklist: [
  ],
};

export type RootState = ReturnType<typeof rootReducer>;


const initialReducers = {
 'weather': weatherReducer,
};

// combining reducers
const rootReducer = combineReducers(initialReducers);

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(),
});



// persistor store
const persistor = persistStore(store);

export {persistor, store};
