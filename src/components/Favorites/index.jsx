import { Row } from "../Row";
import React from "react";
import { DefaultFavorite } from "../DefaultFavorite";
import { FilledFavorite } from "../FilledFavorite";
export const Favorites = props => {
  const { likedGifs } = props;
  return (
    <Row styleOverrides={{ flexWrap: "wrap", justifyContent: "space-around" }}>
      {likedGifs.map((gif, index) =>
        gif.url === null ? (
          <DefaultFavorite key={index} />
        ) : (
          <FilledFavorite key={gif.term} gif={gif} />
        )
      )}
    </Row>
  );
};
