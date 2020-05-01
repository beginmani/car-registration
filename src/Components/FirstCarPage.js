import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Image,Button} from 'react-bootstrap'
import Register from './Register'
class FirstCarPage extends Component {
    constructor(){
        super();
        this.state = {
                bookingStatus: false,
            }
        }
    

    render() {
        return(
           <div>
                <li>
                    {this.props.carinfo.name}
                </li>
                <li>
                    {this.props.carinfo.price}
                </li>
                <li>
                <Image src={this.props.carinfo.img} fluid/>
               </li>
                <Button>See Details</Button>

                <Button disabled={this.state.bookingStatus}  onClick={() => this.updateBookingStatus()}>Book Now</Button>
            </div>
        );

    }

    updateBookingStatus(){
        console.log(this.props.carinfo.name)
    }

}

export default FirstCarPage;
