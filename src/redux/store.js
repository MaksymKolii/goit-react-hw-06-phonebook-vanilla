import { createStore, combineReducers } from 'redux';
import { contactReducer } from './contacts/contacts-redusers';
import { filterReducer } from './filter/filter-redusers';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const enhancer = devToolsEnhancer();

const rootReduser = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
