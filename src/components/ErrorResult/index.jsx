import { Column } from "../Column";
import { RESULT_GIF_HEIGHT, RESULT_GIF_WIDTH } from "../../constants";
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
          border: "1px solid #000",
          backgroundColor: "#FF9800"
        }}
      >
        <span className="default-gif">😞</span>
      </Column>
    </Column>
  );
};
