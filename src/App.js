<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import './App.css';
import FirstCarPage from './Components/FirstCarPage';
import data from './Components/cars.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarRegForm from './Components/Form';
import CarList from './Components/CarList';

class App extends Component {
  

    render() {
        
        return (
            <div>   
            <React.Fragment>
                    <Router>
          
                 <Route path="/home" exact component={CarRegForm}/>
                        <Route path="/dash" component={CarList}/>
          </Router>
          </React.Fragment>
             </div>
        );
    }
>>>>>>> c661d281d3c90793f0d7f6bffae007daf8067ca8
}

export default App;
