import React from "react";
import {
  changeColorindicator,
  changeColorvideocall,
  changeColorparking,
  toggleTheme,
} from "../utils/functions.js";

import "../styles/Buttonpanel.css";

export default function Buttonpanel() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container d-flex flex-wrap justify-content-around align-items-center  m-3">
        <button
          onClick={(e) => changeColorparking(e.currentTarget)}
          className="panelButtons d-flex justify-content-around align-items-center shadow"
        >
          <i
            className="fas fa-parking d-inline-block body-theme-char"
            style={{ fontSize: "30px", transition: "0.5s" }}
          ></i>
        </button>
        <button
          className="panelButtons d-flex justify-content-around align-items-center shadow"
          onClick={showCurrentLocation}
        >
          <i
            className="fas fa-location-arrow d-inline-block body-theme-char"
            style={{ fontSize: "30px" }}
          ></i>
        </button>
      </div>

      <div className="container d-flex flex-wrap justify-content-around align-items-center  m-3">
        <button
          onClick={(e) => changeColorvideocall(e.currentTarget)}
          className="panelButtons d-flex justify-content-around align-items-center shadow"
        >
          <i
            className="fa fa-phone body-theme-char"
            style={{ fontSize: "30px", transform: "rotateY(180deg)" }}
          ></i>
        </button>

        <button
          onClick={(e) => changeColorvideocall(e.currentTarget)}
          className="panelButtons d-flex justify-content-around align-items-center shadow"
        >
          <i
            className="fas fa-video body-theme-char"
            style={{ fontSize: "30px" }}
          ></i>
        </button>
      </div>

      <div className="container d-flex flex-wrap justify-content-around align-items-center m-3">
        <button
          onClick={(e) => changeColorindicator(e.currentTarget)}
          className="panelButtons d-flex justify-content-around align-items-center shadow"
        >
          <i
            className="fas fa-angle-left d-inline-block body-theme-char"
            style={{ fontSize: "40px" }}
          ></i>
        </button>
        <button
          onClick={(e) => changeColorindicator(e.currentTarget)}
          className="panelButtons d-flex justify-content-around align-items-center shadow"
        >
          <i
            className="fas fa-angle-right body-theme-char"
            style={{ fontSize: "40px" }}
          ></i>
        </button>
      </div>

      <div className="container d-flex flex-wrap justify-content-around align-items-center m-3">
        <button
          className="d-flex justify-content-around align-items-center body-theme-char shadow"
          style={{ width: "140px", height: "50px", borderRadius: "10px" }}
        >
          <i
            className="fas fa-address-card d-inline-block body-theme-char"
            style={{ fontSize: "30px", cursor: "pointer" }}
          ></i>
          <span
            className="body-theme-char"
            style={{ fontWeight: "600", cursor: "pointer" }}
          >
            Contacts
          </span>
        </button>
        <button
          className="d-flex justify-content-around align-items-center shadow"
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
    </div>
  );
}

function showCurrentLocation() {
  // Get current location coordinates
  navigator.geolocation.getCurrentPosition(function (position) {
    window.map.flyTo({
      center: [position.coords.longitude, position.coords.latitude],
      essential: true,
    });
  });
}
