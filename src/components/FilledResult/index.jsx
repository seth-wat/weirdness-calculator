import { Column } from "../Column";
import { RESULT_GIF_HEIGHT, RESULT_GIF_WIDTH } from "../../constants";
import React from "react";
import { Gif } from "../Gif";

export const FilledResult = props => {
  const { title, resultURL } = props;
  return (
    <Column>
      <h5 className="gif-title">{title}</h5>
      <Gif
        width={RESULT_GIF_WIDTH}
        height={RESULT_GIF_HEIGHT}
        url={resultURL}
      />
    </Column>
  );
};
