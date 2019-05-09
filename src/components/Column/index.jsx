import React from "react";

export const Column = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...props.styleOverrides
      }}
    >
      {props.children}
    </div>
  );
};
