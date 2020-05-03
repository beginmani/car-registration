import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Card, Col, Nav, Row } from "react-bootstrap";
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
      <Col sm={4}>
        <Card style={{ width: "25 rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={this.props.carinfo.img} rounded />
            <Card.Title>{this.props.carinfo.name}</Card.Title>
            <Card.Title>{this.props.carinfo.price}</Card.Title>
            <div>
              <Row>
                <Col sm={6}>
                  <button
                    type="button"
                    class="btn btn-primary btn-md"
                    onClick={() => this.props.onView(this.props.carinfo)}
                  >
                    See details
                  </button>{" "}
                </Col>
                <Col sm={6}>
                  <Nav.Link href="/form">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-primary btn-md"
                      disabled={this.state.bookingStatus}
                      onClick={() => this.updateBookingStatus()}
                    >
                      {" "}
                      Book Now
                    </button>
                  </Nav.Link>
                </Col>
              </Row>
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
