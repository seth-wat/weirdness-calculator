import { Column } from "../Column";
import {
  EMPTY_GIF_BG,
  FAVORITE_GIF_HEIGHT,
  FAVORITE_GIF_WIDTH,
  GIF_BORDER,
  GIF_BORDER_RADIUS
} from "../../constants";
import React from "react";
import { Row } from "../Row";

export const DefaultFavorite = () => {
  return (
    <Column>
      <Column>
        <h5 className="gif-title-default">Add a favorite!</h5>
        <Column
          styleOverrides={{
            width: FAVORITE_GIF_WIDTH,
            height: FAVORITE_GIF_HEIGHT,
            justifyContent: "center",
            border: GIF_BORDER,
            borderRadius: GIF_BORDER_RADIUS,
            backgroundColor: EMPTY_GIF_BG,
            margin: "0 0 1rem 0"
          }}
        >
          <span style={{ fontSize: "5rem", textAlign: "center" }}>🤪</span>
        </Column>
      </Column>
    </Column>
  );
};
