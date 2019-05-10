import React from "react";
import { Column } from "../Column";
import { Row } from "../Row";
import { Header } from "../Header";
import WeirdnessScore from "../../containers/weirdness-score";
import { ScoredFavorites } from "../../containers/favorites";
import { Title } from "../Title";
import StartOverButton from "../../containers/start-over-button";

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
      <Row
        styleOverrides={{
          maxHeight: "90%",
          minHeight: "90%",
          minWidth: "100%"
        }}
      >
        <Column
          styleOverrides={{
            height: "60%",
            minWidth: "100%",
            justifyContent: "space-between"
          }}
        >
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <WeirdnessScore />
          </div>
          <Title title={"The GIFs you liked"} />
          <div style={{ margin: "0 1rem 0 1rem" }}>
            <ScoredFavorites />
          </div>
          <div style={{ textAlign: "center" }}>
            <StartOverButton />
          </div>
        </Column>
      </Row>
    </Column>
  );
};
