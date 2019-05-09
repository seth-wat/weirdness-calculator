import React from "react";

export const Gif = props => {
  const { width, height, url } = props;
  return <img src={url} width={width} height={height} />;
};
