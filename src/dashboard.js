import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player/soundcloud';
import Buttonpanel from './components/Buttonpanel';
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import './styles/dashboard.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicnNzLW1vdG9ycy1kcHNubSIsImEiOiJja3M5d2J6MG8yMTB0MnZwaHN5MWJ4b2VjIn0.XkTBH9onasR65R4KtW_CoA';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/navigation-day-v1',
      attributionControl: false,
      center: [73.01854585689695, 19.00641653688912],
      zoom: 16,
    });

    map.addControl(
      new window.MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        controls: {
          profileSwitcher: false
        }
      }),
      'top-left'
    );

    window.map = map;
  }

  render() {
    return (
      <Container fluid id="dashboard">
        <Topbar />

        <Row>
          <Col style={{ position: 'relative' }}>

            <Row>
              <div ref={this.mapContainer} className="map-container" />
            </Row>
            <Row>
              <ReactPlayer
                className="player"
                url='https%3A//api.soundcloud.com/tracks/964156921?color=000000&theme_color=ff0000'
                height="30%"
                width="100%"
                config={{
                  soundcloud: {
                    options: {
                      visual: false,
                    }
                  }
                }}
              />
            </Row>

          </Col>

          <Col xs={4}>
            <Buttonpanel />
          </Col>

        </Row>

        <Bottombar />
      </Container>
    );
  }
}

export default Dashboard;
