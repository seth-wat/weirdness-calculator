import produce from "immer";
import { SET_RESULT } from "../actions";

export const generateResult = (url, isLoading) => ({ url, isLoading });

export const defaultState = {
  selectedResult: generateResult(null, false),
  data: {
    0: generateResult(null, false),
    1: generateResult(null, false),
    2: generateResult(null, false),
    3: generateResult(null, false),
    4: generateResult(null, false),
    5: generateResult(null, false),
    6: generateResult(null, false),
    7: generateResult(null, false),
    8: generateResult(null, false),
    9: generateResult(null, false),
    10: generateResult(null, false)
  }
};

export const searchResults = (state = defaultState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_RESULT: {
        const { url, weirdness, isLoading } = action.payload;
        const level = draft[weirdness];
        level.url = url;
        level.isLoading = isLoading;
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
