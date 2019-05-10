import React from "react";
import { Row } from "../Row";
import { HEADER_BORDER_COLOR, HEADER_COLOR } from "../../constants";

export const Header = () => (
  <Row
    styleOverrides={{
      backgroundColor: HEADER_COLOR,
      width: "100%",
      border: `1px solid ${HEADER_BORDER_COLOR}`
    }}
  >
    <h1>Weirdness Calculator</h1>
  </Row>
);
