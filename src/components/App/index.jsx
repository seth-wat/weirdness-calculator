import React from "react";
import { Header } from "../Header";
import { Column } from "../Column";
import { IntroParagraphs } from "../IntroParagraphs";
import GifSearch from "../../containers/gif-search";
import WeirdnessSlider from "../../containers/weirdness-slider";
import { Row } from "../Row";
import { Title } from "../Title";
import SearchResult from "../../containers/search-result";
import LikeButton from "../../containers/like-button";

export const App = () => {
  return (
    <Column styleOverrides={{ height: "100vh" }}>
      <Header />
      <Column styleOverrides={{ width: "60%" }}>
        <Column styleOverrides={{ border: "0 1rem 1rem 0 solid #000" }}>
          <IntroParagraphs />
          <GifSearch />
        </Column>
        <Column
          styleOverrides={{ backgroundColor: "#FFCC80", minHeight: "100%" }}
        >
          <Title />
          <Row styleOverrides={{ justifyContent: "center" }}>
            <SearchResult />
          </Row>
          <Row styleOverrides={{ justifyContent: "center" }}>
            <LikeButton />
          </Row>
          <Row
            styleOverrides={{
              margin: "0rem 1rem 0rem 1rem",
              alignSelf: "center",
              maxWidth: "75%"
            }}
          >
            <WeirdnessSlider />
          </Row>
        </Column>
      </Column>
    </Column>
  );
};
