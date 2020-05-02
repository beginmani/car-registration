import React, { Component } from 'react';
import {Image,Button} from 'react-bootstrap'

class SeeDetails extends Component {
   

    render() {
        console.log(this.props.carinfo.name)
        return(
            <div>
            <li>
                {this.props.carinfo.name}
            </li>
            </div>
        );

    }
}

export default SeeDetails;
