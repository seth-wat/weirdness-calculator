import React from "react";
import "./index.css";
import { Column } from "../Column";
import { RESULT_GIF_HEIGHT, RESULT_GIF_WIDTH } from "../../constants";

export const DefaultResult = props => {
  const { isResultLoading } = props;
  return (
    <Column>
      <h5 className="gif-title">
        {isResultLoading
          ? "Your gif is being retrieved."
          : "Enter a search term!"}
      </h5>
      <Column
        styleOverrides={{
          width: RESULT_GIF_WIDTH,
          height: RESULT_GIF_HEIGHT,
          justifyContent: "center",
          border: "1px solid #000",
          backgroundColor: "#FF9800"
        }}
      >
        <span
          className={isResultLoading ? "default-gif-loading" : "default-gif"}
        >
          🤪
        </span>
      </Column>
    </Column>
  );
};
