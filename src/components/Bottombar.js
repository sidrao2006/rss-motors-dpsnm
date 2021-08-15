import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { changeColor, updateTemperature, changeMute, changeDirection , changeColorcar, findbluetooth } from "../utils/functions.js";
import { useParams } from 'react-router-dom';


import '../styles/Bottombar.css';
import '../styles/dashboard.css';

export default function BottomBar() {
    let { id } = useParams();

    const [temperature1, setTemperature1] = useState(window.localStorage.getItem(`${id}-temperature1`) || 22);
    const [temperature2, setTemperature2] = useState(window.localStorage.getItem(`${id}-temperature2`) || 22);

    return (

        <>
            <Navbar fixed="bottom">
                <Container className="d-flex align-items-center">
                    <Nav style={{ border: "0px solid black", width: "100%" }} className="d-flex justify-content-around align-items-center container-fluid">
                        <Nav.Link href="#" onClick={(e) => changeDirection(e.target)} className="d-flex justify-content-center align-items-center">
                            <i className="high-beam body-theme-char"></i>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-calendar body-theme-char" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" onClick={(e) => changeColor(e.target)} className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="heat-seat body-theme-char"></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div style={{ border: "0px solid black", flexDirection: "column", boxSizing: "border-box", marginTop: "10px" }} className="d-flex justify-content-between align-items-center">
                                <i className="fa fa-chevron-up body-theme-char" id="tempIncrease" style={{ fontSize: "25px" }} onClick={() => updateTemperature(setTemperature1, temperature1 + 1, `${id}-temperature1`)}></i>
                                <span className="body-theme-char" style={{ fontWeight: "bold" }}>{temperature1}</span>
                                <i className="fa fa-chevron-down body-theme-char" id="tempDecrease" style={{ fontSize: "25px" }} onClick={() => updateTemperature(setTemperature1, temperature1 - 1, `${id}-temperature1`)}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-fan body-theme-char" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div style={{ border: "0px solid black", flexDirection: "column", boxSizing: "border-box", marginTop: "10px" }} className="d-flex justify-content-between align-items-center">
                                <i className="fa fa-chevron-up body-theme-char" id="tempIncrease" style={{ fontSize: "25px" }} onClick={() => updateTemperature(setTemperature2, temperature2 + 1, `${id}-temperature2`)}></i>
                                <span className="body-theme-char" style={{ fontWeight: "bold" }}>{temperature2}</span>
                                <i className="fa fa-chevron-down body-theme-char" id="tempDecrease" style={{ fontSize: "25px" }} onClick={() => updateTemperature(setTemperature2, temperature2 - 1, `${id}-temperature2`)}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" onClick={(e) => changeColorcar(e.target)} className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-car body-theme-char" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>
                        
                        <Nav.Link href="#" id="bluetoothIcon" onClick={(e)=>findbluetooth(e.target)} className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-mobile-alt body-theme-char" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>


                        <Nav.Link href="#" onClick={(e)=>changeMute(e.target)}  className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-volume-up body-theme-char" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-cloud-sun-rain body-theme-char" style={{ fontSize: "25px" }}></i>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}