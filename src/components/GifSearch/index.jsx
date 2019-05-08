import React from "react";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { Row } from "../Row";

export const GifSearch = props => {
  return (
    <FormGroup label="Search term" labelFor="search-input">
      <Row>
        <InputGroup id="search-input" placeholder="Hamburger" />
        <Button>Search</Button>
      </Row>
    </FormGroup>
  );
};
