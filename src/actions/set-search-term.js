import { SET_SEARCH_TERM } from "./index";

export const setSearchTerm = value => ({
  type: SET_SEARCH_TERM,
  payload: value
});
