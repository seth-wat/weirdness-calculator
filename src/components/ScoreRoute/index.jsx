import React from "react";
import { Column } from "../Column";
import { Row } from "../Row";
import { Header } from "../Header";
import WeirdnessScore from "../../containers/weirdness-score";
import { ScoredFavorites } from "../../containers/favorites";
import { Title } from "../Title";

export const ScoreRoute = () => {
  return (
    <Column
      styleOverrides={{
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden"
      }}
    >
      <Row styleOverrides={{ maxHeight: "10%", minHeight: "10%" }}>
        <Header />
      </Row>
      <Row styleOverrides={{ maxHeight: "90%", minHeight: "90%" }}>
        <Column styleOverrides={{ minHeight: "100%" }}>
          <WeirdnessScore />
          <Title title={"The GIFs you liked"} />
          <ScoredFavorites />
        </Column>
      </Row>
    </Column>
  );
};
