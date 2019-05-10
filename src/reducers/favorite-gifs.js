import { produce } from "immer";
import { ADD_FAVORITE } from "../actions";
import { createSelector } from "reselect";
import { getSubmittedTerm } from "./search-data";
import { isResultEmpty } from "./search-results";

export const generateLikedGif = (term, weirdnessLevel, url) => ({
  term,
  weirdnessLevel,
  url
});

export const defaultState = {
  data: []
};

export const favoriteGifs = (state = defaultState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_FAVORITE: {
        draft.data.push(action.payload);
        return draft;
      }
      default: {
        return state;
      }
    }
  });
};

export const MAX_FAVORITES = 5;

export const getLikedGifs = state => state.favoriteGifs.data;
export const isTermLikeable = createSelector(
  getLikedGifs,
  getSubmittedTerm,
  isResultEmpty,
  (likedGifs, submittedTerm, isResultEmpty) =>
    !isResultEmpty &&
    likedGifs.length < MAX_FAVORITES &&
    likedGifs.every(gif => gif.term !== submittedTerm)
);
