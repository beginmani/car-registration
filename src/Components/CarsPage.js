import React, { Component } from 'react';
import CarDetails from './CarDetail';
import PropTypes from 'prop-types';

class Cars extends Component {
    render() {
        return (
            <div >
                <div >
                {
                 this.props.cars.reverse().map((carinfo) => {
                    return <CarDetails key={carinfo.name} car={carinfo} />
                }) 
                }
                </div>
            </div>
        );
    }
}

Cars.propTypes = {
    cars: PropTypes.array.isRequired,
}

export default Cars;
