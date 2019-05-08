import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { gifSearch } from "./reducers/gif-search";
import { searchData } from "./reducers/search-data";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ gifSearch, searchData });
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
