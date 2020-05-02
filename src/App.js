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
                 <Route path="/home" exact component={CarRegForm}/>
                        <Route path="/dash" component={CarList}/>
             </div>
        );
    }
}

export default App;
