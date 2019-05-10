import React from "react";
import { Button, Intent } from "@blueprintjs/core";
import { ToastContainer } from "../ToastContainer";

export const LikeButton = props => {
  const { isTermLikeable, likeTerm } = props;
  return (
    <Button
      className="like-button"
      icon="thumbs-up"
      intent={Intent.SUCCESS}
      disabled={!isTermLikeable}
      onClick={() => {
        likeTerm();
        ToastContainer.show({
          message:
            "Awesome! Search Again! You'll only be able to add one gif per search term.",
          intent: Intent.SUCCESS
        });
      }}
    />
  );
};
