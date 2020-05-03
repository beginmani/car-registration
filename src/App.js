import React, { Component } from "react";
import "./App.css";
import FirstCarPage from "./Components/FirstCarPage";
import data from "./Components/cars.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarRegForm from "./Components/Form";
import CarList from "./Components/CarList";
import SeeDetails from "./Components/SeeDetails";

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Router>
            <Route path="/form" exact component={CarRegForm} />
            <Route path="/home" component={CarList} />
            <Route path="/seeDetail" component={SeeDetails} />
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
