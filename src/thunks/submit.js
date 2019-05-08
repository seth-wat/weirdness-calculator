import { setSubmittedTerm } from "../actions/set-submitted-term";
import { extractGifFromResponse, getGif } from "../requests/weirdness-endpoint";

export const submit = async (dispatch, getState) => {
  const state = getState();
  dispatch(setSubmittedTerm(state.gifSearch.value));
  try {
    const json = await getGif(
      state.gifSearch.value,
      state.searchData.weirdnessLevel
    );
    const gifUrl = extractGifFromResponse(json);
    dispatch({ type: "asdf" });
  } catch (e) {
    console.log(e);
  }
};
