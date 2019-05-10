import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { withRouter } from "react-router-dom";

export const CalculateButton = props => {
  const { isFavoritesRemaining } = props;
  return (
    <Button
      onClick={() => {
        props.history.push("/results");
      }}
      intent={Intent.PRIMARY}
      disabled={isFavoritesRemaining}
    >
      {console.log(props.history)}
      CALCULATE MY WEIRDNESS SCORE
    </Button>
  );
};

export default withRouter(CalculateButton);
