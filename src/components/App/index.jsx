import React from "react";
import { Header } from "../Header";
import { Column } from "../Column";
import { IntroParagraphs } from "../IntroParagraphs";
import { Row } from "../Row";

export const App = props => {
  return (
    <Column styleOverrides={{ height: "100vh" }}>
      <Header />
      <Column>
        <IntroParagraphs />
      </Column>
    </Column>
  );
};
