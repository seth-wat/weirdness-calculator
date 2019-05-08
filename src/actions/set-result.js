import { SET_RESULT } from "./index";

export const setResult = (url, weirdness, isLoading) => ({
  type: SET_RESULT,
  payload: {
    url,
    weirdness,
    isLoading
  }
});
