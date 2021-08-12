import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../styles/welcome.css';
import '../styles/dashboard.css';

export default function welcome() {
    return (
        <div id="container">

            <div id="nav">
                <h4>14 August 2026</h4>
                <h5>11:00am</h5>
            </div>

            <div id="welcome">
                <h2>Welcome!</h2>
                <h6>Pick a profile to continue:</h6>
            </div>

            <div id="card">
                <div id="c1">
                <i class="fa fa-user" aria-hidden="true"></i>
                </div>

                <div id="c2">
                <i class="fa fa-user" aria-hidden="true"></i>
                </div>

                <div id="c3">
                <i class="fa fa-user" aria-hidden="true"></i>
                </div>
            </div>

        </div>
    )
}
