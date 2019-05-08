import { UPDATE_SEARCH_INPUT } from "./index";

export const updateSearchInput = term => ({
  type: UPDATE_SEARCH_INPUT,
  payload: term
});
