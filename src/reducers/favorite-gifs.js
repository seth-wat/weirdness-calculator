import { produce } from "immer";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";
import { createSelector } from "reselect";
import { getSubmittedTerm } from "./search-data";
import { isResultEmpty } from "./search-results";

export const generateFavorite = (
  term = "",
  weirdnessLevel = 0,
  url = null
) => ({
  term,
  weirdnessLevel,
  url
});

export const defaultState = {
  filled: [],
  empty: [
    generateFavorite(),
    generateFavorite(),
    generateFavorite(),
    generateFavorite(),
    generateFavorite()
  ]
};

export const favoriteGifs = (state = defaultState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_FAVORITE: {
        const favorite = action.payload;
        draft.filled.push(favorite);
        draft.empty.pop();
        return draft;
      }
      case REMOVE_FAVORITE: {
        const removeTerm = action.payload;
        draft.filled = draft.filled.filter(gif => gif.term !== removeTerm);
        draft.empty.push(generateFavorite());
        return draft;
      }
      default: {
        return state;
      }
    }
  });
};

export const MAX_FAVORITES = 5;
export const getFilledFavorites = state => state.favoriteGifs.filled;
export const getEmptyFavorites = state => state.favoriteGifs.empty;
export const getFavorites = createSelector(
  getFilledFavorites,
  getEmptyFavorites,
  (filled, empty) => [...filled, ...empty]
);
export const favoritesRemaining = createSelector(
  getFilledFavorites,
  filled => MAX_FAVORITES - filled.length
);
export const isTermLikeable = createSelector(
  getFilledFavorites,
  getSubmittedTerm,
  isResultEmpty,
  favoritesRemaining,
  (filled, submittedTerm, isResultEmpty, favoritesRemaining) =>
    !isResultEmpty &&
    favoritesRemaining > 0 &&
    filled.every(gif => gif.term !== submittedTerm)
);
