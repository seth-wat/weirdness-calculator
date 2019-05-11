import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { CalculatorRoute } from "../CalculatorRoute";
import { ScoreRoute } from "../ScoreRoute";

export const App = props => {
  const { isFavoritesRemaining } = props;
  return (
    <Router>
      <Route path="/" exact component={CalculatorRoute} />
      <Route
        path="/results"
        exact
        render={() =>
          isFavoritesRemaining ? <Redirect to="/" /> : <ScoreRoute />
        }
      />
    </Router>
  );
};
