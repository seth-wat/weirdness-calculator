import { Column } from "../Column";
import {
  EMPTY_GIF_BG,
  FAVORITE_GIF_HEIGHT,
  FAVORITE_GIF_WIDTH
} from "../../constants";
import React from "react";

export const DefaultFavorite = () => {
  return (
    <Column>
      <h5 className="gif-title">Add some favorites!</h5>
      <Column
        styleOverrides={{
          width: FAVORITE_GIF_WIDTH,
          height: FAVORITE_GIF_HEIGHT,
          justifyContent: "center",
          border: "1px solid #000",
          backgroundColor: EMPTY_GIF_BG,
          margin: "0 0 0 1rem"
        }}
      >
        <span className={"default-gif"}>🤪</span>
      </Column>
    </Column>
  );
};
