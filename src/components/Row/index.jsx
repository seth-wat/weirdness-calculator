import React from "react";

export const Row = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        ...props.styleOverrides
      }}
    >
      {props.children}
    </div>
  );
};
