import React from "react";
import { Header } from "../Header";
import { Column } from "../Column";

export const App = props => {
  return (
    <Column styleOverrides={{ height: "100vh" }}>
      <Header />
    </Column>
  );
};
