import { getGif } from "../requests/weirdness-endpoint";
import { getSubmittedTerm, getWeirdnessLevel } from "../reducers/search-data";
import { setResult } from "../actions/set-result";
import {
  generateResult,
  resultShouldBeFetched
} from "../reducers/search-results";

export const search = async (dispatch, getState) => {
  const state = getState();
  const searchTerm = getSubmittedTerm(state);
  const weirdnessLevel = getWeirdnessLevel(state);

  if (resultShouldBeFetched(state)) {
    try {
      dispatch(setResult(weirdnessLevel, generateResult(true)));
      const { url, title } = await getGif(searchTerm, weirdnessLevel);
      dispatch(setResult(weirdnessLevel, generateResult(false, url, title)));
    } catch (e) {
      console.log(e);
      dispatch(
        setResult(weirdnessLevel, generateResult(false, null, null, true))
      );
    }
  }
};
