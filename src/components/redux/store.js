import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const initialState = {
//   contactsStore: {
//     contacts: [{ id: 0, name: 'Viks', number: 3975397585758 }],
//   },
//   filterStore: {
//     filters: '',
//   },
// };

// export const store = createStore(rootReducer, enhancer);

/////////////////////////////local storage /////////////////////
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filterInitioal'],
};

const rootReducer = combineReducers({
  contactsStore: contactReducer,
  filterStore: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
