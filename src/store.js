// Import the necessary libraries for Redux and Redux Persist
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Import the root reducer for the application
import rootReducer from './reducers';

// Configuration object for Redux Persist
const persistConfig = {
  key: 'root',    // key used to access the persisted state in the storage
  storage,      // storage engine to be used (localStorage in this case)
};

// Create a persisted reducer using the persistReducer function
const persistedReducer = persistReducer(persistConfig, rootReducer); 

export const store = createStore(persistedReducer);
export const persistor = persistStore(store); // Create the persistor object to persist the Redux store

