import produce from "immer";
import { SET_RESULT } from "../actions";
import { getSubmittedTerm, getWeirdnessLevel } from "./search-data";
import { createSelector } from "reselect";

export const generateResult = (
  isLoading = false,
  url = null,
  didError = false
) => ({ isLoading, url, didError });

export const defaultState = {
  selectedResult: generateResult(),
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
      default: {
        return state;
      }
    }
  });
};

export const getResults = state => state.searchResults.data;
export const getSeletedResult = state => state.searchResults.selectedResult;
export const getResultByWeirdness = state =>
  getResults(state)[getWeirdnessLevel(state)];
export const resultShouldBeFetched = state => {
  const result = getResultByWeirdness(state);
  const searchTerm = getSubmittedTerm(state);
  return (
    result.isLoading === false && result.url === null && searchTerm.length > 0
  );
};
