import { Column } from "../Column";
import { FAVORITE_GIF_HEIGHT, FAVORITE_GIF_WIDTH } from "../../constants";
import React from "react";
import { Gif } from "../Gif";

export const ScaledFavorite = props => {
  const { gif } = props;
  const { url, term, weirdnessLevel } = gif;
  return (
    <Column styleOverrides={{ margin: "0 0 1rem 0" }}>
      <h5 className="gif-title">{term}</h5>
      <Gif width={FAVORITE_GIF_WIDTH} height={FAVORITE_GIF_HEIGHT} url={url} />
      <h5
        style={{ alignSelf: "center", margin: "0.5rem 0 0 0" }}
      >{`${weirdnessLevel} / 10`}</h5>
    </Column>
  );
};
