import { combineReducers, createStore } from "redux";
import { gifSearch } from "./reducers/gif-search";
import { searchData } from "./reducers/search-data";

const rootReducer = combineReducers({ gifSearch, searchData });
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
