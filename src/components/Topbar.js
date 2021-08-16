import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Clock from "./Clock";
import { useParams } from "react-router-dom";
import { users } from "../utils/users";
import { manageDNRPsizes } from "../utils/functions";

import "../styles/Topbar.css";

export default function Topbar() {
  const theme =
    window.localStorage.getItem("theme") === "theme-dark" ? "-dark" : "";

  const [batteryLevel, setBatteryLevel] = React.useState(100);

  useEffect(() => {
    const updateBatteryLevel = async () =>
      setBatteryLevel(Math.floor((await navigator.getBattery()).level * 100));
    updateBatteryLevel();

    manageDNRPsizes();
  }, []);

  return (
    <>
      <Navbar fixed="top">
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="#">
            <img
              src={`${process.env.PUBLIC_URL}/logo${theme}.png`}
              alt="RSS Motors"
              style={{ width: "55px", height: "55px" }}
            />
          </Navbar.Brand>
          <Nav.Link
            href="#"
            className="d-flex justify-content-center align-items-center"
          >
            <span className="m-1 body-theme-char dnrp">D</span>
            <span className="m-1 body-theme-char dnrp">N</span>
            <span className="m-1 body-theme-char dnrp">R</span>
            <span className="m-1 body-theme-char dnrp">P</span>
          </Nav.Link>
          <Nav className="float-right">
            <Nav.Link
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <span className="body-theme-char">{batteryLevel}%</span>
              <div>
                <i
                  className={`fa fa-battery-${
                    Math.floor(batteryLevel / 25) || 1
                  } m-1 body-theme-char`}
                  size="lg"
                  style={{ fontSize: "24px" }}
                ></i>
              </div>
            </Nav.Link>

            <Nav.Link
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <i
                className="fas fa-cloud-sun body-theme-char"
                style={{ fontSize: "21px" }}
              ></i>
              <span className="m-1 body-theme-char">35°</span>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <span className="body-theme-char">14 August 2026</span>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="d-flex justify-content-center align-items-center body-theme-char"
            >
              <Clock className="body-theme-char" />
            </Nav.Link>

            <Nav.Link
              href="#"
              className="d-flex justify-content-center align-items-center"
            >
              <span className="body-theme-char">
                Logged in as {users[useParams().id].name}
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
