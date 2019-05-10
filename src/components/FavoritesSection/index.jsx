import React from "react";
import { Column } from "../Column";
import { Title } from "../Title";
import Favorites from "../../containers/favorites";
import PreCalculationStatus from "../../containers/calculation-status";
import CalculateButton from "../../containers/calculate-button";

export const FavoritesSection = () => {
  return (
    <Column
      styleOverrides={{
        margin: "1rem 0 3rem 0",
        height: "100%",
        justifyContent: "space-between"
      }}
    >
      <Title title="YOUR LIKED GIFS" />
      <Column styleOverrides={{ width: "90%", margin: "0 auto 0 auto" }}>
        <Favorites />
      </Column>
      <div style={{ textAlign: "center" }}>
        <CalculateButton />
        <div style={{ marginTop: "1rem" }}>
          <PreCalculationStatus />
        </div>
      </div>
    </Column>
  );
};
