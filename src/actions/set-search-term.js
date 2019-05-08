import { SET_SEARCH_TERM } from "./index";

export const setSearchTerm = term => ({
  type: SET_SEARCH_TERM,
  payload: term
});
