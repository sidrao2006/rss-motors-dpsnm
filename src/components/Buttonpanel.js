import React from "react";
import Image from "react-bootstrap/Image";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Buttonpanel() {
  return (
      <>
    <div className="container d-flex flex-wrap justify-content-around align-items-center  m-3" style={{}}>
      <div className="d-flex justify-content-around align-items-center shadow" style={{width:"120px", height:"120px",borderRadius:"10px"}}>
          <i className="fas fa-parking d-inline-block dashboard-text" style={{fontSize:"30px"}}></i>
      </div>
      <div className="d-flex justify-content-around align-items-center shadow" style={{width:"120px", height:"120px",borderRadius:"10px"}}>
      <i className="fas fa-location-arrow d-inline-block dashboard-text" style={{fontSize:"30px"}}></i>
      </div>
    </div>

<div className="container d-flex flex-wrap justify-content-around align-items-center  m-3" style={{}}>
<div className="d-flex justify-content-around align-items-center shadow" style={{width:"120px", height:"120px",borderRadius:"10px"}}>
<i className="fa fa-phone dashboard-text" style={{fontSize:"30px",transform:"rotateY(180deg)"}}></i>
</div>

<div className="d-flex justify-content-around align-items-center shadow" style={{width:"120px", height:"120px",borderRadius:"10px"}}>
<i className="fas fa-video dashboard-text" style={{fontSize:"30px"}}></i>
</div>

</div>
<div className="container d-flex flex-wrap justify-content-around align-items-center m-3" style={{}}>
<div className="d-flex justify-content-around align-items-center shadow" style={{width:"120px", height:"120px",borderRadius:"10px"}}>
<i className="fas fa-angle-left d-inline-block dashboard-text" style={{fontSize:"40px"}}></i>

</div>
<div className="d-flex justify-content-around align-items-center shadow" style={{width:"120px", height:"120px",borderRadius:"10px"}}>
<i className="fas fa-angle-right dashboard-text" style={{fontSize:"40px"}}></i>
</div>
</div>

<div className="container d-flex flex-wrap justify-content-around align-items-center m-3" style={{}}>
<div className="d-flex justify-content-around align-items-center shadow" style={{width:"140px", height:"50px",borderRadius:"10px"}}>
<i className="fas fa-address-card d-inline-block dashboard-text" style={{fontSize:"40px",cursor:"pointer"}}></i> <span className="dashboard-text" style={{fontWeight:"600",cursor:"pointer"}}>Contacts</span>

</div>
<div className="d-flex justify-content-around align-items-center shadow" style={{width:"120px", height:"40px",borderRadius:"10px"}}>
<i className="fas fa-moon dashboard-text" style={{fontSize:"20px"}}></i>
<i className="fas fa-sun dashboard-text" style={{fontSize:"20px"}}></i>

</div>
</div>

</>
    
  );
}
