import React from "react";
import { Slider } from "@blueprintjs/core";

export const WeirdnessSlider = props => {
  let value = 0;
  return (
    <Slider
      min={0}
      max={10}
      stepSize={1}
      labelStepSize={10}
      onChange={val => (value = val)}
      value={value}
      vertical={false}
    />
  );
};
