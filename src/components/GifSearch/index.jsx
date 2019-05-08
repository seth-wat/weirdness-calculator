import React from "react";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { Row } from "../Row";

export const GifSearch = props => {
  const { handleChange, searchTerm, search } = props;
  return (
    <FormGroup label="Search term" labelFor="search-input">
      <Row>
        <InputGroup
          id="search-input"
          placeholder="Hamburger"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button onClick={search}>Search</Button>
      </Row>
    </FormGroup>
  );
};
