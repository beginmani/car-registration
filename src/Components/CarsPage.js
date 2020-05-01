import React, { Component } from 'react';
import CarDetail from './CarDetail';

class Cars extends Component {
    render() {
        console.log(this.props.cars);
        return (
            <div >
                <div >
                {
                 this.props.cars.map((carinfo,index) => {
                    return <CarDetail key={index} carinfo={carinfo} />
                })
                }
                </div>
            </div>
        );
    }
}

export default Cars;
