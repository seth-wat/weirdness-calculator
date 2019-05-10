import { getSubmittedTerm, getWeirdnessLevel } from "../reducers/search-data";
import { getResultURL } from "../reducers/search-results";
import { generateLikedGif } from "../reducers/favorite-gifs";
import { addFavorite } from "../actions/add-favorite";

export const likeTerm = (dispatch, getState) => {
  const state = getState();
  const term = getSubmittedTerm(state);
  const weirdnessLevel = getWeirdnessLevel(state);
  const url = getResultURL(state);
  const likedGif = generateLikedGif(term, weirdnessLevel, url);
  dispatch(addFavorite(likedGif));
};
