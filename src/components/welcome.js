import React from "react";
import Clock from "./Clock";
import { Link } from "react-router-dom";
import { users } from "../data/users.js";

import "../styles/welcome.css";
import "../styles/dashboard.css";

export default function welcome() {
  return (
    <div id="container">
      <div id="nav">
        <p>14 August 2026</p>
        {/* <h2>RSS MOTORS</h2> */}
        <p> <Clock /> </p>
      </div>


      <div id="welcome">
        <h2>Welcome!</h2>
        <h6>Pick a profile to continue:</h6>
      </div>

      <div id="card">
        {
          Object.entries(users).map(([uname, { name, email }], i) =>
            <Link id={`c${i + 1}`} to={`/dashboard/${uname}`}>
              <i class="fa fa-user" aria-hidden="true"></i>
              <span>{name}</span>
              <span className="leader" style={{ fontSize: "12px" }}>
                {email}
              </span>
            </Link>
          )
        }

      </div>

      <footer id="footer">
        <div className="themeChange">
          <button
            className="buttons d-flex justify-content-around align-items-center shadow"
            style={{ width: "140px", height: "50px", borderRadius: "10px" }}
          >
            <i
              className="fas fa-moon dashboard-text"
              style={{ fontSize: "20px" }}
            ></i>
            <i
              className="fas fa-sun dashboard-text"
              style={{ fontSize: "20px" }}
            ></i>
          </button>
        </div>

        <div className="icons">
          <i className="pointer fa fa-gear dashboard-text"></i>
          <i className="pointer material-icons dashboard-text" style={{ fontSize: "30px" }}>
            bluetooth
          </i>
          <span className="pointer battery dashboard-text">
            <span style={{ fontSize: "10px", fontWeight: "700" }}>100%</span>
            <i className="pointer fa fa-battery-4 dashboard-text" style={{ fontSize: "25px" }}></i>
          </span>
          <i className="pointer fas fa-cloud-sun-rain dashboard-text"></i>
        </div>
      </footer>
    </div>
  );
}
