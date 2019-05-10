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
import Favorites from "../../containers/favorites";

export const App = () => {
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
      <Row styleOvverides={{ maxHeight: "90%", minHeight: "90%" }}>
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
            <IntroParagraphs />
            <GifSearch />
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
            <Column
              styleOverrides={{
                justifyContent: "space-between",
                flexGrow: "1",
                marginTop: "1rem",
                marginBottom: "1rem"
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
          </Column>
        </Column>
        <Column
          styleOverrides={{
            width: "40%",
            minHeight: "100vh",
            backgroundColor: "#FFCC80",
            borderLeft: "1px solid #FFA726"
          }}
        >
          <div style={{ margin: "1rem" }}>
            <Title title="YOUR LIKED GIFS" />
            <Favorites />
          </div>
        </Column>
      </Row>
    </Column>
  );
};
