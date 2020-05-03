import background from '../background.jpg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl,NavDropdown,Button } from 'react-bootstrap';
import './styles.css'
var sectionStyle={
    backgroundImage:"url(" +background +")",
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
}
class Welcome extends React.Component
{
    render()
    {
        return(
            <div style={sectionStyle}>
            {/* <img src={background}/> */}
            <header className="App-header">
                <span className="Welcome">Welcome to Car-Renting App</span>
            <Nav.Link  href="/home"> <Button className="btn btn-success"  type="click" > <font color="white">
                Get Started
              </font>
            </Button>
            </Nav.Link>
            <h6>Enjoy Driving!</h6>
            </header>
            </div>
        );
    }
}
export default Welcome;