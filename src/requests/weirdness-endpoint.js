export const formRequest = (term, weirdness) =>
  `http://api.giphy.com/v1/gifs/translate?s=${term}&weirdness=${weirdness}&api_key=${
    process.env.REACT_APP_GIPHY_KEY
  }`;

export const getGif = async (term, weirdness) => {
  const res = await fetch(formRequest(term, weirdness));
  const json = await res.json();
  return extractGifFromResponse(json);
};

export const extractGifFromResponse = json => {
  const { data } = json;
  return {
    url: data.images.original.url,
    title: data.title
  };
};
