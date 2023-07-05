import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { todos, isLoading } from "./todos/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  todos,
  isLoading,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
// added to retain the state between refreshes, uses localstorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  legacy_createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

// Best practices when using Redux

// 1. Export the connected and unconnected versions of a component.
// 2. keep Redux actions and async operations out of your reduces.
// 3. Think carefully about connecting components.
