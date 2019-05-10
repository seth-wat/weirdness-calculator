import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { withRouter } from "react-router-dom";

export const StartOverButton = props => {
  const { startOver } = props;
  return (
    <Button
      onClick={() => {
        startOver();
        props.history.push("/");
      }}
      intent={Intent.SUCCESS}
    >
      START OVER
    </Button>
  );
};

export default withRouter(StartOverButton);
