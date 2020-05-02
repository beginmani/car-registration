import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Card, Col } from "react-bootstrap";
import Register from "./Register";
//import img1 from " ../images/2004_Porsche_911_Carrera_type_997.jpg";
import img2 from "../images/250px-Nissan_GT-R.jpg";
import img3 from "../images/250px-BMW_M3_E92.jpg";
import img4 from "../images/250px-Audi_S5.jpg";
import img5 from "../images/250px-2007_Audi_TT_Coupe.jpg";
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
