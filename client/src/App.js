import './App.css';
import { Navbar, Nav, Image, DropdownButton, Dropdown, Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import SignUp from "./Child/SignUp";
import Home from "./Child/Home";
import Login from "./Child/Login";
import Flight from "./Child/Flight";
import Hotel from "./Child/Hotel";
import UserList from "./Child/UserList"
import homef from "./homef.svg"
import planef from "./planef.svg"
import carf from "./carf.svg"
import buildingf from "./buildingf.svg"
import documentf from "./documentf.svg"
import helpf from "./helpf.svg"

import VehicleRental from "./Child/VehicleRental";
import { ProtectedRoute } from './protected_route';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#">Project Traveler</Navbar.Brand>
            <Nav className="mr-auto">
            <Image src={homef}/>
              <LinkContainer to="/Home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <Image src={planef}/>
              <LinkContainer to="/Flight">
                <Nav.Link>Flight</Nav.Link>
              </LinkContainer>

              <Image src={carf}/>
              <LinkContainer to="/VehicleRental">
                <Nav.Link>Vehicle Rental</Nav.Link>
              </LinkContainer>

              <Image src={buildingf}/>
              <LinkContainer to="/Hotel">
                <Nav.Link>Hotel</Nav.Link>
              </LinkContainer>

              <Image src={documentf}/>
              <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <Image src={helpf}/>
              <LinkContainer to="/Help">
                <Nav.Link>Help</Nav.Link>
              </LinkContainer>
            </Nav>

            <Form inline>
              <LinkContainer to="/SignUp" className="mr-sm-2">
                <Button>Signup</Button>
              </LinkContainer>

              <LinkContainer to="/Login" className="mr-sm-2">
                <Button>Login</Button>
              </LinkContainer>


              <DropdownButton title="Control Panel">
                <LinkContainer to="/UserList">
                  <Dropdown.Item>Users Management</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="/VehicleList">
                  <Dropdown.Item>Vehicles Management</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="/HotelList">
                  <Dropdown.Item>Hotels Management</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="/FlightList">
                  <Dropdown.Item>Flights Management </Dropdown.Item>
                </LinkContainer>
                <Dropdown.Item>Profile </Dropdown.Item>
                <Dropdown.Item>Bookings </Dropdown.Item>
                <Dropdown.Item>Logout </Dropdown.Item>

              </DropdownButton>
            </Form>


          </Navbar>
        </div>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Hotel" component={Hotel} />
        <Route path="/Flight" component={Flight} />
        <Route path="/UserList" component={UserList}/>
        <Route path="/VehicleRental" component={VehicleRental} />


        <ProtectedRoute exact path="/PLACEHOLDER" component={Login} />

      </BrowserRouter>


    );
  }
}


export default App;
