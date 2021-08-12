import {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './styles/onboard.css';

// importing components

class Onboard extends Component {
    render(){
        return(
            <Container fluid id="onboard">
                <Welcome/>
            </Container>
        );
    }
}