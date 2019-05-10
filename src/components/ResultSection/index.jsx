import { Column } from "../Column";
import { Title } from "../Title";
import { Row } from "../Row";
import SearchResult from "../../containers/search-result";
import WeirdnessSlider from "../../containers/weirdness-slider";
import LikeButton from "../../containers/like-button";

import React from "react";

export const ResultSection = () => {
  return (
    <Column
      styleOverrides={{
        justifyContent: "space-between",
        flexGrow: "1",
        marginTop: "1rem",
        marginBottom: "2rem"
      }}
    >
      <Title title="YOUR RESULT" />
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
  );
};
