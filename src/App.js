import React, { Component } from 'react';
import './App.css';
import CarDetail from './Components/CarDetail';
import data from './Components/cars.json';

class App extends Component {
    constructor(){
    super();
    this.state = {
            cars: [],
            customerDetails:[]

        }
    }

    componentWillMount(){
        this.setState({ cars: data });
    }
   

    renderCars() {
        return this.state.cars.map((carinfo,index) => {
           return <CarDetail key={index} carinfo={carinfo} />
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
