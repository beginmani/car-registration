import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Card, Col } from "react-bootstrap";
import Register from "./Register";

class FirstCarPage extends Component {
  constructor() {
    super();
    this.state = {
      bookingStatus: false,
    };
  }

  render() {
    return (
      //    <div>
      //         <li>
      //             {this.props.carinfo.name}
      //         </li>
      //         <li>
      //             {this.props.carinfo.price}
      //         </li>
      //         <li>
      //         <Image src={this.props.carinfo.img} fluid/>
      //        </li>
      //         <Button>See Details</Button>

      //         <Button disabled={this.state.bookingStatus}  onClick={() => this.updateBookingStatus()}>Book Now</Button>
      //

      //   <Card style={{ width: "18rem" }}>
      //     <Card.Img variant="top" src={this.props.carinfo.img} />
      //     <Card.Body>
      //       <Card.Title>{this.props.carinfo.name}</Card.Title>
      //       <Card.Text>{this.props.carinfo.price}</Card.Text>
      //       <Button variant="primary">See Details</Button>
      //       <Button
      //         disabled={this.state.bookingStatus}
      //         onClick={() => this.updateBookingStatus()}
      //       >
      //         Book Now
      //       </Button>
      //     </Card.Body>
      //   </Card>
      <Col sm={12}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={this.props.carinfo.img} />
            <Card.Title>{this.props.carinfo.name}</Card.Title>
            <Card.Title>{this.props.carinfo.price}</Card.Title>

            <div>
              <Button variant="primary" size="xs">
                See Details
              </Button>{" "}
              <Button
                variant="primary"
                size="xs"
                disabled={this.state.bookingStatus}
                onClick={() => this.updateBookingStatus()}
              >
                {" "}
                Book Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  updateBookingStatus() {
    console.log(this.props.carinfo.name);
  }
}

export default FirstCarPage;
