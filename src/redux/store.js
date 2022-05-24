import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers";

const rootReducer = combineReducers({ usersReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
