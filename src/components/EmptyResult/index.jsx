import { ErrorResult } from "../ErrorResult";
import DefaultResult from "../../containers/default-result";
import React from "react";

export const EmptyResult = props => {
  const { didResultError } = props;
  return (
    <React.Fragment>
      {didResultError ? <ErrorResult /> : <DefaultResult />}
    </React.Fragment>
  );
};
