import React from "react";
export const WeirdnessScore = props => {
  const { score } = props;
  return <h3>{`You scored an ${score} out of 10 on the weirdness scale!`}</h3>;
};
