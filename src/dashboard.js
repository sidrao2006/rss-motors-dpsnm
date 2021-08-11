import { Component } from 'react';
import { Container } from 'react-bootstrap';

import './styles/dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard"
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #000000 100%)',
        }}
      >
        <Container fluid>

          <Row>
            {/* Top bar */}
          </Row>

          <Row>
            <Col>

              <Row>
                {/* Map */}
              </Row>

              <Row>
                {/* Sound cloud audio player */}
              </Row>

            </Col>

            <Col>
              {/* Button panel */}
            </Col>

          </Row>

          <Row>
            {/* Bottom bar */}
          </Row>

        </Container>
      </div>
    );
  }
}

export default Dashboard;
