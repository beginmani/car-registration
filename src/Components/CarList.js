import React, { Component } from "react";
import FirstCarPage from "./FirstCarPage";
import data from "./cars.json";
import { Route, IndexRoute } from "react-router";
import * as ReactBootstrap from "react-bootstrap";
import { Row } from "react-bootstrap";
class CarList extends Component {
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
      return <FirstCarPage key={index} carinfo={carinfo} />;
    });
  }

  render() {
    return (
      <div class="container">
        <Row>{this.renderCars()}</Row>
      </div>
    );
  }
}

export default CarList;
