import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "./style.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      pwd: "",
      msg: "",
      redirect: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkPwd = () => {
    //Em um app real com certeza usaria hash no back-end em Node JS
    if (
      this.state.userName === "challenge@hubchain.com" &&
      this.state.pwd === "hubchain"
    ) {
      this.setState({ redirect: true });
    } else {
      this.setState({ msg: "Usuário ou Senha incorretos" });
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/app" />;
    }
  };

  render() {
    return (
      <Container id="login">
        {this.renderRedirect()}
        <Card style={{ width: "18rem" }}>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  name="userName"
                  type="text"
                  placeholder="Type your user name here..."
                  onChange={this.handleChange}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="pwd"
                  type="password"
                  placeholder="********"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={this.checkPwd}>
              Entrar
            </Button>
          </Card.Body>
          <Card.Footer>{this.state.msg}</Card.Footer>
        </Card>
      </Container>
    );
  }
}
