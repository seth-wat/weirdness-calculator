import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CalculatorRoute } from "../CalculatorRoute";
import { ScoreRoute } from "../ScoreRoute";

export const App = () => {
  return (
    <Router>
      <Route path="/" exact component={CalculatorRoute} />
      <Route path="/results" exact component={ScoreRoute} />
    </Router>
  );
};
