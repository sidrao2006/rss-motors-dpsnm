import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Clock from './Clock.js'
import { useParams } from 'react-router-dom';
import { users } from "../utils/users.js";

export default function Topbar() {
  const theme = window.localStorage.getItem('theme') === 'theme-dark' ? '-dark' : '';

  return (
    <>
      <Navbar fixed="top">

        <Container className="d-flex align-items-center">
          <Navbar.Brand href="#"><img src={`${process.env.PUBLIC_URL}/logo${theme}.png`} alt="RSS Motors" style={{ width: "55px", height: "55px" }} /></Navbar.Brand>
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
                <i className="fa fa-battery-3 m-1 dashboard-text" size="lg" style={{ fontSize: "24px" }}></i>
              </div>
            </Nav.Link>


            <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
              <i className="fas fa-cloud-sun dashboard-text" style={{ fontSize: "21px" }}></i>
              <span className="m-1 dashboard-text">35°</span>

            </Nav.Link>
            <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
              <span className="dashboard-text">
                14 August 2026
              </span>
            </Nav.Link>
            <Nav.Link href="#" className="d-flex justify-content-center align-items-center dashboard-text">
              <Clock className="dashboard-text" />
            </Nav.Link>

            <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
              <span className="dashboard-text">Logged in as {users[useParams().id].name}</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
