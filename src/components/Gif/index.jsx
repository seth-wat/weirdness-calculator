import React from "react";
import { GIF_BORDER, GIF_BORDER_RADIUS } from "../../constants";

export const Gif = props => {
  const { width, height, url } = props;
  return (
    <img
      style={{ border: GIF_BORDER, borderRadius: GIF_BORDER_RADIUS }}
      src={url}
      width={width}
      height={height}
    />
  );
};
