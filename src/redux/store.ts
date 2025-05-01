import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { MMKV } from 'react-native-mmkv';
import {
  persistReducer,
  persistStore,
  Storage,
} from 'redux-persist';

import weatherReducer from './slice/weatherSlice';

// MMKV instance for Redux Persist 
export const storage = new MMKV();

export const reduxPersistStorage: Storage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value ?? null);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

// Redux Persist config
const persistConfig = {
  key: 'root',
  storage: reduxPersistStorage,
  blacklist: [], // Add any slices here you don’t want persisted
};

// Combine reducers
const rootReducer = combineReducers({
  weather: weatherReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store setup
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Persistor setup
export const persistor = persistStore(store);

// Infer types for usage
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
