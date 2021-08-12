import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Clock from './Clock.js'

export default function Topbar() {
  return (
    <>
      <Navbar fixed="top">

        <Container className="d-flex align-items-center">
          <Navbar.Brand href="#">RSS MOTORS</Navbar.Brand>
          <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
            <span className="dashboard-text" style={{ fontSize: "34px", fontWeight: "600" }}>D</span>
            <span className="m-1 dashboard-text" style={{ fontSize: "15px" }}>N</span>
            <span className="m-1 dashboard-text" style={{ fontSize: "15px" }}>R</span>
            <span className="m-1 dashboard-text" style={{ fontSize: "15px" }}>P</span>


          </Nav.Link>
          <Nav className="float-right">
            <Nav.Link href="#" className="d-flex justify-content-center align-items-center">

              <span className="dashboard-text">80%</span>
              <div>
                <i className="fa fa-battery-full m-1 dashboard-text" size="lg" style={{ fontSize: "24px" }}></i>
              </div>
            </Nav.Link>


            <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
              <i className="fas fa-cloud-sun dashboard-text" style={{ fontSize: "21px" }}></i>
              <span className="m-1 dashboard-text">35°</span>

            </Nav.Link>
            <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
              <span className="dashboard-text">
                {
                  `${new Date().getDate()} ${["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                  ][new Date().getMonth()]}`
                }
              </span>
            </Nav.Link>
            <Nav.Link href="#" className="d-flex justify-content-center align-items-center dashboard-text">
              <Clock className="dashboard-text" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
