import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player/soundcloud';

import './styles/dashboard.css';

// importing components
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';

class Dashboard extends Component {
  render() {
    return (
      <Container fluid id="dashboard">
        <Topbar />

        <Row>
          <Col>

            <Row>
              {/* Map */}
            </Row>
            <Row>
              <ReactPlayer
                id="player"
                url='https%3A//api.soundcloud.com/tracks/293&amp'
                height='100px'
                config={{
                  soundcloud: {
                    options: {
                      buying: false,
                      sharing: false,
                      download: false,
                      show_artwork: false,
                    }
                  }
                }}
              />
            </Row>

          </Col>

          <Col>
            {/* Button Panel */}
          </Col>
        </Row>

        <Bottombar />
      </Container>
    );
  }
}

export default Dashboard;
