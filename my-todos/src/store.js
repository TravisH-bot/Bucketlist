import { legacy_createStore, combineReducers } from "redux";

const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => legacy_createStore(rootReducer);
