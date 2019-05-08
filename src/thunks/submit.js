import { setSubmittedTerm } from "../actions/set-submitted-term";
import { getSearchInput } from "../reducers/search-input";
import { search } from "./search";

export const submit = (dispatch, getState) => {
  const state = getState();
  const searchTerm = getSearchInput(state);

  dispatch(setSubmittedTerm(searchTerm));
  dispatch(search);
};
