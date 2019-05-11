import { ScaledFavorite } from "../ScaledFavorite";
import React from "react";
import { Row } from "../Row";

export const ScoreFavorites = props => {
  const { likedGifs } = props;
  return (
    <Row styleOverrides={{ justifyContent: "space-between" }}>
      {likedGifs.map(gif => (
        <ScaledFavorite key={gif.term} gif={gif} />
      ))}
    </Row>
  );
};
