import React, { Component } from 'react';
import PropTypes from 'prop-types';



class CarDetail extends Component {

    render() {

        return(
            <ul >
                <li>
                    {this.props.carinfo.name}
                </li>
            </ul>
        );

    }
}

export default CarDetail;
