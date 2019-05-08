import React from "react";

export const Column = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        ...props.styleOverrides
      }}
    >
      {props.children}
    </div>
  );
};
