import React from "react";
import { Column } from "../Column";
import { Row } from "../Row";
import { Header } from "../Header";
import { SearchSection } from "../SearchSection";
import { ResultSection } from "../ResultSection";
import { FavoritesSection } from "../FavoritesSection";

export const CalculatorRoute = () => {
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
              backgroundColor: "#FFCC80",
              minHeight: "60%",
              maxHeight: "60%",
              justifyContent: "center",
              borderTop: "1px solid #FFA726"
            }}
          >
            <ResultSection />
          </Column>
        </Column>
        <Column
          styleOverrides={{
            width: "40%",
            minHeight: "100%",
            maxHeight: "100%",
            backgroundColor: "#FFCC80",
            borderLeft: "1px solid #FFA726"
          }}
        >
          <FavoritesSection />
        </Column>
      </Row>
    </Column>
  );
};
