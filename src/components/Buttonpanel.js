import React from "react";
export default function Buttonpanel() {
  return (
    <>
      <div className="container d-flex flex-wrap justify-content-around align-items-center  m-3" >
        <div className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="fas fa-parking d-inline-block dashboard-text" style={{ fontSize: "30px" }}></i>
        </div>
        <div className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="fas fa-location-arrow d-inline-block dashboard-text" style={{ fontSize: "30px" }}></i>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-around align-items-center  m-3" >
        <div className="panelButtons d-flex justify-content-around align-items-center shadow">
          <i className="fa fa-phone dashboard-text" style={{ fontSize: "30px", transform: "rotateY(180deg)" }}></i>
        </div>

        <div className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="fas fa-video dashboard-text" style={{ fontSize: "30px" }}></i>
        </div>

      </div>
      <div className="container d-flex flex-wrap justify-content-around align-items-center m-3" >
        <div className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="fas fa-angle-left d-inline-block dashboard-text" style={{ fontSize: "40px" }}></i>

        </div>
        <div className="panelButtons d-flex justify-content-around align-items-center shadow" >
          <i className="fas fa-angle-right dashboard-text" style={{ fontSize: "40px" }}></i>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-around align-items-center m-3" >
        <button className="button d-flex justify-content-around align-items-center shadow" style={{ width: "140px", height: "50px", borderRadius: "10px", }}>
          <i className="fas fa-address-card d-inline-block dashboard-text" style={{ fontSize: "30px", cursor: "pointer" }}></i><span className="dashboard-text" style={{ fontWeight: "600", cursor: "pointer" }}>Contacts</span>

        </button>
        <button className="button d-flex justify-content-around align-items-center shadow" style={{ width: "140px", height: "50px", borderRadius: "10px" }}>
          <i className="fas fa-moon dashboard-text" style={{ fontSize: "20px" }}></i>
          <i className="fas fa-sun dashboard-text" style={{ fontSize: "20px" }}></i>

        </button>
      </div>

    </>

  );
}
