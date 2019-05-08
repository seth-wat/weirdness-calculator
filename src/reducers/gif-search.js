import produce from "immer";
import { SET_SEARCH_TERM } from "../actions";

export const defaultState = {
  value: ""
};
export const gifSearch = (state = defaultState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_SEARCH_TERM: {
        draft.value = action.payload;
        return draft;
      }
      default: {
        return state;
      }
    }
  });
};
