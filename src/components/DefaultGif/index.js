import React from "react";
import "./index.css";
export const DefaultGif = props => {
  const { isLoading } = props;
  return (
    <p className={isLoading ? "default-gif-loading" : "default-gif"}>🤪</p>
  );
};
