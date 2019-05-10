import { Column } from "../Column";
import { FAVORITE_GIF_HEIGHT, FAVORITE_GIF_WIDTH } from "../../constants";
import React from "react";
import { Gif } from "../Gif";
import UnlikeButton from "../../containers/unlike-button";

export const FilledFavorite = props => {
  const { gif } = props;
  const { url, term } = gif;
  return (
    <Column styleOverrides={{ margin: "0 0 1rem 0" }}>
      <h5 className="gif-title">{term}</h5>
      <div
        style={{
          position: "relative",
          width: FAVORITE_GIF_WIDTH,
          height: FAVORITE_GIF_HEIGHT
        }}
      >
        <Gif
          width={FAVORITE_GIF_WIDTH}
          height={FAVORITE_GIF_HEIGHT}
          url={url}
        />
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <UnlikeButton term={term} />
        </div>
      </div>
    </Column>
  );
};
