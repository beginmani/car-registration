import React, { Component } from "react";
import FirstCarPage from "./FirstCarPage";
import data from "./cars.json";
import { Route, IndexRoute } from "react-router";
import * as ReactBootstrap from "react-bootstrap";
import { Row } from "react-bootstrap";
//import img1 from "../images/photo-1542362567-b07e54358753.jpeg";
import img2 from "../images/250px-Nissan_GT-R.jpg";
import img3 from "../images/250px-BMW_M3_E92.jpg";
import img4 from "../images/250px-Audi_S5.jpg";
import img5 from "../images/250px-2007_Audi_TT_Coupe.jpg";
class CarList extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      car: {
        id: 1,
        img: "/static/media/250px-Nissan_GT-R.10d11f39.jpg",
        name: "Nissan GT-R",
        manufacturer: "Nissan",
        model: "GT-R",
        price: 80000,
        vehicleNumber: "",
        seatingCapacity: "",
        bookingStatus: false,
      },
      carid: null,
    };
  }
  handleview = (car) => {
    console.log("event handler called", car.id);
    this.setState({ car });
  };
  componentWillMount() {
    this.setState({ cars: data });
  }

  renderCars() {
    return this.state.cars.map((carinfo, index) => (
      <FirstCarPage key={index} onView={this.handleview} carinfo={carinfo} />
    ));
  }

  render() {
    return (
      <div>
        <Row>{this.renderCars()}</Row>
        <div>{this.state.car.name}</div>

        <section class="section section-sm section-first bg-default">
          <div class="container">
            <div class="row row-50 justify-content-start align-items-xl-center">
              <div class="col-md-10 col-lg-6 col-xl-7">
                <div class="offset-right-xl-15">
                  <img
                    src={this.state.car.img}
                    alt=""
                    width="500"
                    height="400"
                  />
                </div>
              </div>
              <div class="col-md-10 col-lg-6 col-xl-5 text-left">
                <h3 class="text-gray-1000">Mercedes-Benz C218</h3>
                <p class="text-gray-500">
                  This project was designed for one of the biggest Swiss
                  entertainment centers that grew in popularity in 2009. One of
                  their new buildings needed top quality interior designed and
                  our studio offered the services of Will O’Brien. Everything
                  was completed in less than a month.
                </p>
                <div class="divider divider-30"></div>
                <div class="list list-description d-inline-block d-md-block">
                  <div class="row">
                    <div class="col-xs-12 col-md-5">
                      <ul>
                        <li>
                          <span class="material-icons-done"></span>
                          <span>4-door sedan</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span class="material-icons-done"></span>
                          <span>Auto transmission</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span class="material-icons-done"></span>
                          <span>4cyl 2.1L engine</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span class="material-icons-done"></span>
                          <span>Rear-wheel drive</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-xs-12 col-md-5">
                      <ul>
                        <li>
                          <span class="material-icons-done"></span>
                          <span>Black leather</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span class="material-icons-done"></span>
                          <span>Keyless start</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span class="material-icons-done"></span>
                          <span>Voice recognition</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span class="material-icons-done"></span>
                          <span>Heated seats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="divider divider-30"></div>
                <div class="group-md group-middle justify-content-sm-start">
                  <button type="button" class="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CarList;
