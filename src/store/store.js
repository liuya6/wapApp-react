import {createStore, applyMiddleware} from "redux";
import routReducer from "./reducers";
import thunk from "redux-thunk";
// todo react持久化插件 redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
const persistConfig = {
  key: "root",
  storage:storageSession,
  blacklist: [""] //todo 黑名单
};
const persistedReducer = persistReducer(persistConfig, routReducer);
let store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
let persistor = persistStore(store);
export  {
  store,
  persistor
};
