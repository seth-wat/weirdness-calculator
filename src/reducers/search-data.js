import produce from "immer";
import { SET_SUBMITTED_TERM, SET_WEIRDNESS_LEVEL } from "../actions";

export const defaultState = {
  submittedTerm: "",
  weirdnessLevel: 0
};
export const searchData = (state = defaultState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_SUBMITTED_TERM: {
        draft.submittedTerm = action.payload;
        return draft;
      }
      case SET_WEIRDNESS_LEVEL: {
        draft.weirdnessLevel = action.payload;
        return draft;
      }
      default: {
        return state;
      }
    }
  });
};
