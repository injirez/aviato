import React from "react";
import { SearchBar } from "./SearchBar";
import { CardComponent } from "./CardComponent";
import { CardGroup, Col, Row } from "react-bootstrap";

export const HomePage = () => {
  return (
    <>
      <SearchBar />
      <CardGroup>
        <Row className="mx-auto my-2">
          <Col>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </Col>
        </Row>
      </CardGroup>
    </>
  );
};
