import React, { Component } from 'react';
import './App.css';
import CarsPage from './Components/CarsPage';
import data from './Components/cars.json';

class App extends Component {
    constructor(){
    super();
    this.state = {
            cars: [],
            customerDetails:[]

        }
    }

    componentDidlMount() {
        this.setState({ cars: data });
      }

 
    render() {
        return (
            <div>
                <CarsPage cars={this.state.cars} />
            </div>
        );
    }
}

export default App;
