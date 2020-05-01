import React, { Component } from 'react';
import './App.css';
import FirstCarPage from './Components/FirstCarPage';
import data from './Components/cars.json';
import {Route, IndexRoute} from 'react-router';

class App extends Component {
    constructor(){
    super();
    this.state = {
            cars: [],
        }
    }

    componentWillMount(){
        this.setState({ cars: data });
    }
   

    renderCars() {
        return this.state.cars.map((carinfo,index) => {
           return <FirstCarPage key={index} carinfo={carinfo} />
        })
      }

    render() {
        
        return (
            <div>
                {this.renderCars()}
             </div>
        );
    }
}

export default App;
