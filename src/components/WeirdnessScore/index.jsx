import React from "react";
export const WeirdnessScore = props => {
  const { score } = props;
  return <h3>{`You scored an ${score} / 10 on the weirdness scale!`}</h3>;
};
