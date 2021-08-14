import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { changeColor } from "../data/barBottom.js";
import { changeMute } from "../data/barBottom.js";


import '../styles/Bottombar.css';
import '../styles/dashboard.css';

export default function bottombar() {
    let temp = 22;
    

    return (

        <>
        
            <Navbar fixed="bottom">
                <Container className="d-flex align-items-center">
                    <Nav style={{ border: "0px solid black", width: "100%" }} className="d-flex justify-content-around align-items-center container-fluid">
                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <i className="high-beam dashboard-text" style={{ fontSize: "25px" }}></i>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-calendar dashboard-text" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" onClick={(e)=>changeColor(e.target)} className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="heat-seat dashboard-text" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div style={{ border: "0px solid black", flexDirection: "column", boxSizing: "border-box", marginTop: "10px" }} className="d-flex justify-content-between align-items-center">
                                <i className="fa fa-chevron-up dashboard-text" id="tempIncrease" style={{ fontSize: "25px" }}></i>
                                <span className="dashboard-text" style={{ fontWeight: "bold" }}>{temp}</span>
                                <i className="fa fa-chevron-down dashboard-text" id="tempDecrease" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-fan dashboard-text" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div style={{ border: "0px solid black", flexDirection: "column", boxSizing: "border-box", marginTop: "10px" }} className="d-flex justify-content-between align-items-center">
                                <i className="fa fa-chevron-up dashboard-text" id="tempIncrease" style={{ fontSize: "25px" }}></i>
                                <span className="dashboard-text" style={{ fontWeight: "bold" }}>{temp}</span>
                                <i className="fa fa-chevron-down dashboard-text" id="tempDecrease" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-car dashboard-text" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-mobile-alt dashboard-text" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>
                        <Nav.Link  href="#"   className="d-flex justify-content-center align-items-center">
                            <div>
                                <i onClick={(e)=>changeMute(e.target)} className="fa fa-volume-up dashboard-text" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-cloud-sun-rain dashboard-text" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}