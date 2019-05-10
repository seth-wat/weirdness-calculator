import { Column } from "../Column";
import {
  EMPTY_GIF_BG,
  GIF_BORDER,
  GIF_BORDER_RADIUS,
  RESULT_GIF_HEIGHT,
  RESULT_GIF_WIDTH
} from "../../constants";
import React from "react";

export const ErrorResult = () => {
  return (
    <Column>
      <h5 className="gif-title">Your gif couldn't be found.</h5>
      <Column
        styleOverrides={{
          width: RESULT_GIF_WIDTH,
          height: RESULT_GIF_HEIGHT,
          justifyContent: "center",
          border: GIF_BORDER,
          borderRadius: GIF_BORDER_RADIUS,
          backgroundColor: EMPTY_GIF_BG
        }}
      >
        <span className="default-gif">😞</span>
      </Column>
    </Column>
  );
};
