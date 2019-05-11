import produce from "immer";
import { CLEAR_RESULTS, SET_RESULT } from "../actions";
import { getSubmittedTerm, getWeirdnessLevel } from "./search-data";
import { createSelector } from "reselect";

export const generateResult = (
  isLoading = false,
  url = null,
  title = null,
  didError = false
) => ({ isLoading, url, title, didError });

export const defaultState = {
  data: {
    0: generateResult(),
    1: generateResult(),
    2: generateResult(),
    3: generateResult(),
    4: generateResult(),
    5: generateResult(),
    6: generateResult(),
    7: generateResult(),
    8: generateResult(),
    9: generateResult(),
    10: generateResult()
  }
};

export const searchResults = (state = defaultState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_RESULT: {
        const { weirdnessLevel, result } = action.payload;
        draft.data[weirdnessLevel] = result;
        return draft;
      }
      case CLEAR_RESULTS: {
        draft = defaultState;
        return draft;
      }
      default: {
        return state;
      }
    }
  });
};

export const getResults = state => state.searchResults.data;

export const getResultByWeirdness = createSelector(
  getResults,
  getWeirdnessLevel,
  (results, weirdnessLevel) => results[weirdnessLevel]
);

export const resultShouldBeFetched = createSelector(
  getResultByWeirdness,
  getSubmittedTerm,
  (result, submittedTerm) =>
    result.isLoading === false &&
    result.url === null &&
    submittedTerm.length > 0
);

export const getResultURL = createSelector(
  getResultByWeirdness,
  result => result.url
);

export const getResultTitle = createSelector(
  getResultByWeirdness,
  result => shortenTitle(result.title)
);

export const isResultEmpty = createSelector(
  getResultURL,
  url => {
    return url === null;
  }
);

export const didResultError = createSelector(
  getResultByWeirdness,
  result => result.didError
);

export const isResultLoading = createSelector(
  getResultByWeirdness,
  result => result.isLoading
);

export const shortenTitle = title => {
  if (title.length > 20) {
    const shorter = title.substr(0, 20);
    const end = shorter.lastIndexOf(" ");
    return end === -1 ? shorter : shorter.substr(0, end);
  }
  return title;
};
