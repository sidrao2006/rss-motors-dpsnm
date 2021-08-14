import React from "react";
import '../styles/Buttonpanel.css'
import { changeColorparking } from "../data/barBottom.js";
import { changeColorindicator } from "../data/barBottom.js";


export default function Buttonpanel() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container d-flex flex-wrap justify-content-around align-items-center  m-3" >
        <button onClick={(e) => changeColorparking(e.currentTarget)} className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="noevents fas fa-parking d-inline-block dashboard-text" style={{ fontSize: "30px", transition: "0.5s" }}></i>
        </button>
        <button className="panelButtons d-flex justify-content-around align-items-center shadow" onClick={showCurrentLocation}>
          <i className="fas fa-location-arrow d-inline-block dashboard-text" style={{ fontSize: "30px" }}></i>
        </button>
      </div>

      <div className="container d-flex flex-wrap justify-content-around align-items-center  m-3" >
        <button className="panelButtons d-flex justify-content-around align-items-center shadow">
          <i className="fa fa-phone dashboard-text" style={{ fontSize: "30px", transform: "rotateY(180deg)" }}></i>
        </button>

        <button className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="fas fa-video dashboard-text" style={{ fontSize: "30px" }}></i>
        </button>
      </div>

      <div className="container d-flex flex-wrap justify-content-around align-items-center m-3" >
        <button onClick={(e) => changeColorindicator(e.currentTarget)} className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="fas fa-angle-left d-inline-block dashboard-text noevents" style={{ fontSize: "40px" }}></i>

        </button>
        <button onClick={(e) => changeColorindicator(e.currentTarget)} className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="fas fa-angle-right dashboard-text noevents" style={{ fontSize: "40px" }}></i>
        </button>
      </div>

      <div className="container d-flex flex-wrap justify-content-around align-items-center m-3" >
        <button className="d-flex justify-content-around align-items-center dashboard-text shadow" style={{ width: "140px", height: "50px", borderRadius: "10px", }}>
          <i className="fas fa-address-card d-inline-block dashboard-text" style={{ fontSize: "30px", cursor: "pointer" }}></i><span className="dashboard-text" style={{ fontWeight: "600", cursor: "pointer" }}>Contacts</span>

        </button>
        <button className="d-flex justify-content-around align-items-center shadow" style={{ width: "140px", height: "50px", borderRadius: "10px" }}>
          <i className="fas fa-moon dashboard-text" style={{ fontSize: "20px" }}></i>
          <i className="fas fa-sun dashboard-text" style={{ fontSize: "20px" }}></i>

        </button>
      </div>

    </div>

  );
}

function showCurrentLocation() {
  // Get current location coordinates
  navigator.geolocation.getCurrentPosition(function (position) {
    window.map.flyTo(
      {
        center: [
          position.coords.longitude,
          position.coords.latitude
        ],
        essential: true
      }
    )
  })
}
