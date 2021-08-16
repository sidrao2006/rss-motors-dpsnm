import React from "react";
import Clock from "./Clock";
import { Link } from "react-router-dom";
import { users } from "../utils/users.js";

import "../styles/welcome.css";
import { toggleTheme, findbluetooth } from "../utils/functions";

export default function Welcome() {
  const [batteryLevel, setBatteryLevel] = React.useState(100);

  React.useEffect(() => {
    const updateBatteryLevel = async () => setBatteryLevel(Math.floor((await navigator.getBattery()).level * 100));
    updateBatteryLevel();
  }, []);

  return (
    <div id="container">
      <div id="nav">
        <p className="body-theme-char">14 August 2026</p>
        {/* <h2>RSS MOTORS</h2> */}
        <Clock className="body-theme-char" />
      </div>


      <div id="welcome">
        <h2 className="body-theme-char">Welcome!</h2>
        <h6 className="body-theme-char">Pick a profile to continue:</h6>
      </div>

      <div id="card">
        {
          Object.entries(users).map(([uname, { name, email }], i) =>
            <Link id={`c${i + 1}`} key={email} to={"/dashboard/" + uname}>
              <i className="fa fa-user body-theme-char" aria-hidden="true"></i>
              <span className="body-theme-char">{name}</span>
              <span className="leader body-theme-char" style={{ fontSize: "12px" }}>
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
            onClick={toggleTheme}
          >
            <i
              className="fas fa-moon body-theme-char"
              style={{ fontSize: "20px" }}
            ></i>
            <i
              className="fas fa-sun body-theme-char"
              style={{ fontSize: "20px" }}
            ></i>
          </button>
        </div>

        <div className="icons">
          <i className="pointer fa fa-gear body-theme-char"></i>
          <i className="pointer fab fa-bluetooth body-theme-char" onClick={(e) => findbluetooth(e.target)} style={{ fontSize: "30px" }}>
          </i>
          <span className="pointer battery body-theme-char">
            <span style={{ fontSize: "10px", fontWeight: "700" }}>{batteryLevel}%</span>
            <i className={`pointer fa fa-battery-${Math.floor(batteryLevel / 25) || 1} body-theme-char`} style={{ fontSize: "25px" }}></i>
          </span>
          <i className="pointer fas fa-cloud-sun-rain body-theme-char"></i>
        </div>
      </footer>
    </div>
  );
}
