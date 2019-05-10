import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CalculatorRoute } from "../CalculatorRoute";

export const App = () => {
  return (
    <Router>
      <Route path="/" exact component={CalculatorRoute} />
    </Router>
  );
};
