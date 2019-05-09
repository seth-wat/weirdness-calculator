import React from "react";
import { Header } from "../Header";
import { Column } from "../Column";
import { IntroParagraphs } from "../IntroParagraphs";
import GifSearch from "../../containers/gif-search";
import WeirdnessSlider from "../../containers/weirdness-slider";
import ResultGif from "../../containers/result-gif";
import { DefaultGif } from "../DefaultGif";

export const App = props => {
  return (
    <Column styleOverrides={{ height: "100vh" }}>
      <Header />
      <Column>
        <IntroParagraphs />
      </Column>
      <ResultGif height={400} width={400} />
      <DefaultGif />
      <GifSearch />
      <WeirdnessSlider />
    </Column>
  );
};
