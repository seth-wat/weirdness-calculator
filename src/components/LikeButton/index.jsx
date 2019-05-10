import React from "react";
import { Button } from "@blueprintjs/core";
export const LikeButton = props => {
  const { isTermLikeable, likeTerm } = props;
  return (
    <Button
      className="like-button"
      icon="thumbs-up"
      disabled={!isTermLikeable}
      onClick={likeTerm}
    />
  );
};
