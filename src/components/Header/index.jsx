import React from "react";
import { Row } from "../Row";

export const Header = props => (
  <Row styleOverrides={{ backgroundColor: "#FF9800", width: "100%" }}>
    <h1
      className="bp3-heading"
      style={{ marginLeft: "1rem", padding: "1.5rem 0 1.5rem 0" }}
    >
      Weirdness Calculator
    </h1>
  </Row>
);
