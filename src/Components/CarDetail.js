import React, { Component } from 'react';
import PropTypes from 'prop-types';



class CarList extends Component {

    render() {

        return(
            <ul >
                <li>
                    {this.props.car.name}
                </li>
                <li>
                <img className="specs-icon" alt={"Car Image"} src={this.props.car.img} />
                </li>
                <li>
                        {this.props.car.price}
                </li>
            </ul>
        );

    }
}

CarList.propTypes = {
    car: PropTypes.object.isRequired
}
export default CarList;
