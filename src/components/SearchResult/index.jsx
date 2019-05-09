import React from "react";
import EmptyResult from "../../containers/empty-result";
import FilledResult from "../../containers/filled-result";

export const SearchResult = props => {
  const { isResultEmpty } = props;
  return (
    <React.Fragment>
      {isResultEmpty ? <EmptyResult /> : <FilledResult />}
    </React.Fragment>
  );
};
