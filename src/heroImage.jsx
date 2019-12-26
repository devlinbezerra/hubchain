import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default props => (
  <Row>
    <Col xs={3}>
      <Image src={props.path} thumbnail />
      <Button variant="danger" size="sm">
        Remover da Lista
      </Button>
    </Col>
    <Col xs={9}>
      <Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);
