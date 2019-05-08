import React from "react";
import { Slider } from "@blueprintjs/core";

export const WeirdnessSlider = props => {
  const { weirdnessLevel, onSlide } = props;
  return (
    <Slider
      min={0}
      max={10}
      stepSize={1}
      labelStepSize={10}
      onChange={onSlide}
      value={weirdnessLevel}
      vertical={false}
    />
  );
};
