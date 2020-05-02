import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Planning from "./Dates";

var options = { year: "numeric", month: "numeric", day: "numeric" };
class CarRegForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeRenterName = this.onChangeRenterName.bind(this);

    this.onChangeRenterPhone = this.onChangeRenterPhone.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      rname: "",
      rphone: "",
      ridate: "",
      rrdate: "",
      message: "",
      todo_completed: false,
    };
  }

  onChangeRenterName(e) {
    this.setState({
      rname: e.target.value,
    });
  }

  onChangeRenterPhone(e) {
    this.setState({
      rphone: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.rname) {
      this.setState({ message: "names cannot be null" });
    } else if (!this.state.rphone) {
      this.setState({ message: "Phone Number cannot be null" });
    } else if (!this.state.ridate) {
      this.setState({ message: "Issue Date cannot be null" });
    } else if (!this.state.rrdate) {
      this.setState({ message: "Return Date cannot be null" });
    } else {
      alert("Form filled");
      console.log(`Form submitted:`);
      console.log(`Renter Name: ${this.state.rname}`);
      console.log(`Renter Phone Number: ${this.state.rphone}`);
      console.log(`Renter Issue Date: ${this.state.ridate}`);
      console.log(`Renter Issue Date: ${this.state.rrdate}`);

      this.setState({
        rname: "",
        rphone: "",
        ridate: "",
        rrdate: "",
        todo_completed: false,
      });
    }
  }

  render() {
    return (
      <div
        style={{ marginTop: "41px", marginLeft: "429px", marginRight: "513px" }}
      >
        <h2>Book a Car </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Renter Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.rname}
              onChange={this.onChangeRenterName}
            />
          </div>
          <div className="form-group">
            <label>Renter Phone: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.rphone}
              onChange={this.onChangeRenterPhone}
            />
          </div>

          <div className="form-group">
            <label>Renter Issue Date: </label>
            <br />
            <Route path="/home" component={Planning} />
          </div>

          <div>{this.state.message}</div>

          <div className="form-group">
            <input type="submit" value="Done" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
export default CarRegForm;
