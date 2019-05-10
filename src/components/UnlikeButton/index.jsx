import React from "react";
import { Button, Intent } from "@blueprintjs/core";

export const UnlikeButton = props => {
  const { unlike, term } = props;
  return (
    <Button icon="delete" intent={Intent.DANGER} onClick={() => unlike(term)} />
  );
};
