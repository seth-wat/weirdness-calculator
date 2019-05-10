import React from "react";
import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { Row } from "../Row";
import { Column } from "../Column";

export const GifSearch = props => {
  const { handleChange, searchTerm, search } = props;
  return (
    <Column styleOverrides={{ margin: "3rem 0 0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          search();
        }}
      >
        <FormGroup label="Search term" labelFor="search-input">
          <Row>
            <InputGroup
              id="search-input"
              placeholder="Hamburger"
              value={searchTerm}
              onChange={handleChange}
            />
            <Button intent={Intent.PRIMARY} onClick={search}>
              SEARCH
            </Button>
          </Row>
        </FormGroup>
      </form>
    </Column>
  );
};
