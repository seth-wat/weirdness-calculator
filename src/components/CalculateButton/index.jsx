import React from "react";
import { Button, Intent } from "@blueprintjs/core";
export const CalculateButton = props => {
  const { isFavoritesRemaining } = props;
  return (
    <Button intent={Intent.PRIMARY} disabled={isFavoritesRemaining}>
      CALCULATE MY WEIRDNESS SCORE
    </Button>
  );
};
