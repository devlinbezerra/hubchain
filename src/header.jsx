import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default props => (
  <Jumbotron>
    <h1>Let's go to the Battle</h1>
    <p>
      Choose your super-heroes out of the whole list in Marvel to defeat the a
      super villain who is threading the world.
    </p>
    <ButtonGroup>
      <Button onClick={props.onClick} variant="primary">
        {props.buttonText}
      </Button>
      <Button variant="secondary" onClick={props.sair}>
        Sair
      </Button>
    </ButtonGroup>
  </Jumbotron>
);
