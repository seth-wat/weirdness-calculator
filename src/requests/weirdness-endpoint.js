export const formRequest = (term, weirdness) =>
  `http://api.giphy.com/v1/gifs/translate?s=${term}&weirdness=${weirdness}&api_key=${
    process.env.REACT_APP_GIPHY_KEY
  }`;

export const getGif = async (term, weirdness) => {
  const res = await fetch(formRequest(term, weirdness));
  return res.json();
};

export const extractGifFromResponse = json => json.data.images.original.url;
