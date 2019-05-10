import React from "react";
import { Column } from "../Column";
import { Row } from "../Row";
import { Header } from "../Header";
import { SearchSection } from "../SearchSection";
import { ResultSection } from "../ResultSection";
import { FavoritesSection } from "../FavoritesSection";
import { BODY_BORDER_COLOR, BODY_COLOR } from "../../constants";

export const CalculatorRoute = () => {
  return (
    <Column
      styleOverrides={{
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden"
      }}
    >
      <Row styleOverrides={{ minHeight: "10%", maxHeight: "10%" }}>
        <Header />
      </Row>
      <Row styleOverrides={{ minHeight: "90%", maxHeight: "90%" }}>
        <Column
          styleOverrides={{
            width: "60%",
            minHeight: "100%",
            maxHeight: "100%"
          }}
        >
          <Column
            styleOverrides={{
              minHeight: "40%",
              maxHeight: "40%",
              justifyContent: "center"
            }}
          >
            <SearchSection />
          </Column>
          <Column
            styleOverrides={{
              backgroundColor: BODY_COLOR,
              minHeight: "60%",
              maxHeight: "60%",
              justifyContent: "center",
              borderTop: `1px solid ${BODY_BORDER_COLOR}`
            }}
          >
            <ResultSection />
          </Column>
        </Column>
        <Column
          styleOverrides={{
            width: "40%",
            minHeight: "100%",
            backgroundColor: BODY_COLOR,
            borderLeft: `1px solid ${BODY_BORDER_COLOR}`
          }}
        >
          <FavoritesSection />
        </Column>
      </Row>
    </Column>
  );
};
