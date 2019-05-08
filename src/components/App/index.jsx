import React from "react";
import { Header } from "../Header";
import { Column } from "../Column";
import { IntroParagraphs } from "../IntroParagraphs";
import GifSearch from "../../containers/gif-search";

export const App = props => {
  return (
    <Column styleOverrides={{ height: "100vh" }}>
      <Header />
      <Column>
        <IntroParagraphs />
      </Column>
      <GifSearch />
    </Column>
  );
};
