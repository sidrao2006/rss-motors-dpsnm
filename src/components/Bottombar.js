import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Highbeam from '../components/highbeam.png';
import Heatseat from '../components/heatseat.png';


export default function bottombar() {
    return (
        <>
            <Navbar bg="light" variant="light" fixed="bottom">
                <Container className="d-flex align-items-center">
                    <Nav style={{border: "0px solid black",width: "100%"}} className="d-flex justify-content-around align-items-center container-fluid">
                        <Nav.Link href="#settings" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-gear" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#settings" className="d-flex justify-content-center align-items-center">
                            <div>
                                <img src={Highbeam} style={{width: "30px"}}/>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#calendar" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-calendar" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#settings" className="d-flex justify-content-center align-items-center">
                            <div>
                                <img src={Heatseat} style={{width: "30px"}}/>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div style={{border:"0px solid black",flexDirection: "column", boxSizing:"border-box", marginTop:"10px"}} className="d-flex justify-content-between align-items-center">
                                <i className="fa fa-chevron-up" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                                <span style={{fontWeight: "bold",color:"black"}}>20</span>
                                <i className="fa fa-chevron-down" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-fan" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#" className="d-flex justify-content-center align-items-center">
                            <div style={{border:"0px solid black",flexDirection: "column", boxSizing:"border-box", marginTop:"10px"}} className="d-flex justify-content-between align-items-center">
                                <i className="fa fa-chevron-up" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                                <span style={{fontWeight: "bold",color:"black"}}>20</span>
                                <i className="fa fa-chevron-down" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#car" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-car" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#mobile" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-mobile-alt" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#volume" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-volume-up" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#weather" className="d-flex justify-content-center align-items-center">
                            <div>
                                <i className="fa fa-cloud-sun-rain" variant="dark" style={{fontSize:"25px",color:"black"}}></i>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}