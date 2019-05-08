import { setSubmittedTerm } from "../actions/set-submitted-term";
import { extractGifFromResponse, getGif } from "../requests/weirdness-endpoint";
import { getSearchInput } from "../reducers/search-input";
import { getWeirdnessLevel } from "../reducers/search-data";

export const submit = async (dispatch, getState) => {
  const state = getState();
  const searchTerm = getSearchInput(state);
  const weirdnessLevel = getWeirdnessLevel(state);

  dispatch(setSubmittedTerm(searchTerm));
  try {
    const json = await getGif(searchTerm, weirdnessLevel);
    const gifUrl = extractGifFromResponse(json);
    dispatch({ type: "asdf" });
  } catch (e) {
    console.log(e);
  }
};
