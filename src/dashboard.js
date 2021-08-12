import { Component } from 'react';
import { Container } from 'react-bootstrap';

import './styles/dashboard.css';

// importing components
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';

class Dashboard extends Component {
  render() {
    return (
      <Container fluid id="dashboard">
        <Topbar />
        <span>Helloooo</span>
        <Bottombar />
      </Container>
    );
  }
}

export default Dashboard;
