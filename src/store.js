import { combineReducers, createStore } from "redux";
import { gifSearch } from "./reducers/gif-search";

const rootReducer = combineReducers({ gifSearch });
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
