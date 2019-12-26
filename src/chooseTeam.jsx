import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import HeroImage from "./heroImage";

export default props => (
  <Card>
    <Card.Header>The Superhero team</Card.Header>
    <Card.Body>
      <Row>
        <Col xs={12}>
          <Form>
            <Form.Group>
              <Form.Label>Select your hero's name</Form.Label>
              <InputGroup>
                <Form.Control
                  placeholder="Type your heroe's name here..."
                  id="heroeName"
                  as="select"
                  onChange={props.onChange}
                >
                  {props.characters.map((e, i) => (
                    <option value={i} key={i}>
                      {e.name}
                    </option>
                  ))}
                </Form.Control>
                <InputGroup.Append>
                  <Button onClick={props.onClick} variant="primary">
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>Your team...</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ListGroup variant="flush">
            {props.heroes.map((e, i) => (
              <ListGroup.Item key={i}>
                <HeroImage
                  path={
                    e.thumbnail.path +
                    "/landscape_small." +
                    e.thumbnail.extension
                  }
                  name={e.name}
                  description={e.description}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);
