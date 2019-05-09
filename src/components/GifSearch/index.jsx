import React from "react";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { Row } from "../Row";
import { Column } from "../Column";

export const GifSearch = props => {
  const { handleChange, searchTerm, search } = props;
  return (
    <Column styleOverrides={{ margin: "3rem 0 0 1rem" }}>
      <FormGroup label="Search term" labelFor="search-input">
        <Row>
          <InputGroup
            id="search-input"
            placeholder="Hamburger"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button onClick={search}>SEARCH</Button>
        </Row>
      </FormGroup>
    </Column>
  );
};
