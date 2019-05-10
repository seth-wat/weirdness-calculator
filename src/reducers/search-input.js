import produce from "immer";
import { UPDATE_SEARCH_INPUT } from "../actions";
import { createSelector } from "reselect";

export const defaultState = {
  value: ""
};
export const searchInput = (state = defaultState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UPDATE_SEARCH_INPUT: {
        draft.value = action.payload;
        return draft;
      }
      default: {
        return state;
      }
    }
  });
};

export const getSearchInput = state => state.searchInput.value;
export const isSearchEmpty = createSelector(
  getSearchInput,
  term => term.length === 0
);
