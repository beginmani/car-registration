import React, { Component } from 'react';

class CarDetail extends Component {

    render() {

        return(
           <div>
                <li>
                    {this.props.carinfo.name}
                </li>
                <li>
                    {this.props.carinfo.price}
                </li>
                <li><img src={this.props.carinfo.img} alt="Car img"/></li>
                <li>
                    {this.props.carinfo.booked}
                </li>
            </div>
        );

    }
}

export default CarDetail;
