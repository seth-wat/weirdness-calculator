import React from "react";
import { Row } from "../Row";

export const Header = () => (
  <Row
    styleOverrides={{
      backgroundColor: "#FFA726",
      width: "100%",
      border: "1px solid #FFA726"
    }}
  >
    <h1>Weirdness Calculator</h1>
  </Row>
);
