import "bootstrap/dist/css/bootstrap.min.css";
import React, { Redirect } from "react";
import axios from "axios";
import md5 from "md5";
import Container from "react-bootstrap/Container";
import VillainCard from "./villainCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./header";
import ChooseTeam from "./chooseTeam";

const endPoint = "http://gateway.marvel.com/";
const character = "/v1/public/characters";
const villainId = [1009652, 1009146, 1009148, 1009407, 1010846];
const publicKey = "d35b547f86c21595ed99be8a71a31f04";
const privateKey = "2269f6bc4c61a34556c1e21401cb0f4ca154c2cc";
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);
const imgSize = "standard_large";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      thumbnail: "",
      description: "",
      moreDetail: "",
      buttonText: "Figure out who is your villain",
      heroes: [],
      selectedHeroIndex: 0,
      selectedHeroes: [],
      redirect: false
    };
  }

  componentDidMount() {
    this.start();
    axios
      .get(
        `${endPoint +
          character}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=35&offset=1`
      )
      .then(res => {
        this.setState({ heroes: res.data.data.results });
      });
  }

  start = async () => {
    const index = Math.floor(Math.random() * 4);
    const res = await axios.get(
      `${endPoint +
        character +
        "/" +
        villainId[
          index
        ]}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=35&offset=1`
    );

    const root = res.data.data.results[0];

    this.setState({
      name: root.name,
      thumbnail:
        root.thumbnail.path + "/" + imgSize + "." + root.thumbnail.extension,
      description: root.description,
      moreDetail: root.resourceURI,
      buttonText: "Click here to get another villain randomly"
    });
  };

  handleChange = e => {
    this.setState({
      selectedHeroIndex: e.target.value
    });
  };

  addHero = () => {
    const hero = this.state.heroes[this.state.selectedHeroIndex];
    const selectedHeroes = this.state.selectedHeroes;
    selectedHeroes.push(hero);
    this.setState({
      selectedHeroes
    });
    console.log(this.state.selectedHeroIndex);
  };

  sair = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    console.log(this.state.redirect);
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <Container>
        {this.renderRedirect()}
        <Row>
          <Col xs={12}>
            <Header
              onClick={this.start}
              buttonText={this.state.buttonText}
              sair={this.sair}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <VillainCard
              name={this.state.name}
              thumbnail={this.state.thumbnail}
              description={this.state.description}
              moreDetail={this.state.moreDetail}
            />
          </Col>
          <Col xs={9}>
            <ChooseTeam
              characters={this.state.heroes}
              onClick={this.addHero}
              onChange={this.handleChange}
              heroes={this.state.selectedHeroes}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
