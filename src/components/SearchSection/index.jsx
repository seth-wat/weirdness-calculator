import React from "react";
import { IntroParagraphs } from "../IntroParagraphs";
import GifSearch from "../../containers/gif-search";

export const SearchSection = () => {
  return (
    <React.Fragment>
      <IntroParagraphs />
      <GifSearch />
    </React.Fragment>
  );
};
