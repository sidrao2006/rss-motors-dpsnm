import { Component } from "react";
import { Container } from "react-bootstrap";

// importing components
import Welcome from "./components/welcome";

class Onboard extends Component {
  render() {
    return (
      <Container fluid id="onboard">
        <Welcome />
      </Container>
    );
  }
}

export default Onboard;
