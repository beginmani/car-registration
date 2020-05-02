import React, { Component } from "react";
import "./App.css";
import FirstCarPage from "./Components/FirstCarPage";
import data from "./Components/cars.json";
import { Route, IndexRoute } from "react-router";
import { Row } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
    };
  }

  componentWillMount() {
    this.setState({ cars: data });
  }

  renderCars() {
    return this.state.cars.map((carinfo, index) => {
      return (
        <Row>
          <FirstCarPage key={index} carinfo={carinfo} />
        </Row>
      );
    });
  }

  render() {
    return <div>{this.renderCars()}</div>;
  }
}

export default App;
