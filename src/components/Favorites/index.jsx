import { Row } from "../Row";
import React from "react";
import { DefaultFavorite } from "../DefaultFavorite";
import { FilledFavorite } from "../FilledFavorite";
export const Favorites = props => {
  const { likedGifs } = props;
  return (
    <Row styleOverrides={{ flexWrap: "wrap", justifyContent: "center" }}>
      {likedGifs.map(gif =>
        gif.url === null ? <DefaultFavorite /> : <FilledFavorite gif={gif} />
      )}
    </Row>
  );
};
