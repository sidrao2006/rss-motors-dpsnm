import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Topbar() {
  return (
    <>
      <Navbar bg="light" variant="light">

        <Container className="d-flex align-items-center">
          <Navbar.Brand href="#home">RSS MOTORS</Navbar.Brand>
          <Nav.Link href="#weather" className="d-flex justify-content-center align-items-center">
            <span style={{ fontSize: "34px", color: "black", fontWeight: "600" }}>D</span>
            <span className="m-1" style={{ fontSize: "15px", color: "black" }}>N</span>
            <span className="m-1" style={{ fontSize: "15px", color: "black" }}>R</span>
            <span className="m-1" style={{ fontSize: "15px", color: "black" }}>P</span>


          </Nav.Link>
          <Nav className="float-right">
            <Nav.Link href="#battery" className="d-flex justify-content-center align-items-center">

              <span style={{}}>80%</span>
              <div>
                <i className="fa fa-battery-full m-1" size="lg" style={{ fontSize: "24px" }} variant="dark"></i>


              </div>
            </Nav.Link>


            <Nav.Link href="#weather" className="d-flex justify-content-center align-items-center">
              <i className="fas fa-cloud-sun" style={{ fontSize: "21px" }} variant="dark"></i>
              <span className="m-1">35°</span>

            </Nav.Link>
            <Nav.Link href="#date" className="d-flex justify-content-center align-items-center">11 August</Nav.Link>
            <Nav.Link href="#time" className="d-flex justify-content-center align-items-center">06:00pm</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
