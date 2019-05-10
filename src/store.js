import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { searchInput } from "./reducers/search-input";
import { searchData } from "./reducers/search-data";
import thunk from "redux-thunk";
import { searchResults } from "./reducers/search-results";
import { favoriteGifs } from "./reducers/favorite-gifs";
const rootReducer = combineReducers({
  searchInput,
  searchData,
  searchResults,
  favoriteGifs
});
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
