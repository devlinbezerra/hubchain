import React from "react";
import Card from "react-bootstrap/Card";

export default props => (
  <Card style={{ width: "16rem" }}>
    <Card.Header>The Villain</Card.Header>
    <Card.Img src={props.thumbnail} variant="top" />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <Card.Footer>
        <a href={props.moreDetail}>More Detail</a>
      </Card.Footer>
    </Card.Body>
  </Card>
);
