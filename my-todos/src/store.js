import { legacy_createStore, combineReducers } from "redux";
import { todos } from "./todos/reducers";

const reducers = {
  todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => legacy_createStore(rootReducer);
