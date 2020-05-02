import React, { Component } from 'react';
import FirstCarPage from './FirstCarPage';
import data from './cars.json';
import {Route, IndexRoute} from 'react-router';
import * as ReactBootstrap  from "react-bootstrap";
class  CarList extends Component {
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
           return <ReactBootstrap.CardDeck>
           <FirstCarPage key={index} carinfo={carinfo} />
           </ReactBootstrap.CardDeck>
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

export default CarList;
