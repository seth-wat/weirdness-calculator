import React from "react";
import "./index.css";
import { Column } from "../Column";

export const IntroParagraphs = props => {
  return (
    <Column>
      <p className="bp3-ui-text">
        Find out how weird you are by selecting the GIFs that make you laugh.
        We’ll show you the least weird ones to start, but you can move the
        slider to make them weirder.
      </p>
      <br />
      <p className="bp3-ui-text">
        When you find a GIF you like, press the <em>Like button</em>. Once you
        like 5 GIFs, we’ll show you how weird you are.
      </p>
    </Column>
  );
};
