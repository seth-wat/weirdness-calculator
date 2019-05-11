import React from "react";

export const CalculationStatus = props => {
  const { gifsRemaining } = props;
  const isPlural = gifsRemaining > 1;
  const mustLike = gifsRemaining > 0;
  return (
    <React.Fragment>
      {mustLike ? (
        <p className="favorite-status">
          You must <em>Like</em>
          {` ${gifsRemaining} more ${
            isPlural ? "GIFs" : "GIF"
          } to calculate your score`}
        </p>
      ) : (
        <p className="favorite-status">It's time to calculate your score!</p>
      )}
    </React.Fragment>
  );
};
