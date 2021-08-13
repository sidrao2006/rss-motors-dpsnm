import React from "react";

import "../styles/welcome.css";
import "../styles/dashboard.css";

export default function welcome() {
  return (
    <div id="container">
      <div id="nav">
        <h4>14 August 2026</h4>
        {/* <h2>RSS MOTORS</h2> */}
        <h5>11:00am</h5>
      </div>


      <div id="welcome">
        <h2>Welcome!</h2>
        <h6>Pick a profile to continue:</h6>
      </div>

      <div id="card">
        <div id="c1">
          <i class="fa fa-user" aria-hidden="true"></i>
          <span>Profile 2</span>
          <span className="leader" style={{ fontSize: "12px" }}>
            example1@vb.com
          </span>
        </div>

        <div id="c2">
          <i class="fa fa-user" aria-hidden="true"></i>
          <span>Profile 1</span>
          <span className="leader" style={{ fontSize: "12px" }}>
            example1@vb.com
          </span>
        </div>

        <div id="c3">
          <i class="fa fa-user" aria-hidden="true"></i>
          <span>Profile 3</span>
          <span className="leader" style={{ fontSize: "12px" }}>
            example1@vb.com
          </span>
        </div>
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
