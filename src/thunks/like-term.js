import { getSubmittedTerm, getWeirdnessLevel } from "../reducers/search-data";
import { getResultTitle, getResultURL } from "../reducers/search-results";
import { generateFavorite } from "../reducers/favorite-gifs";
import { addFavorite } from "../actions/add-favorite";

export const likeTerm = (dispatch, getState) => {
  const state = getState();
  const term = getSubmittedTerm(state);
  const weirdnessLevel = getWeirdnessLevel(state);
  const url = getResultURL(state);
  const title = getResultTitle(state);
  const likedGif = generateFavorite(term, weirdnessLevel, url, title);
  dispatch(addFavorite(likedGif));
};
