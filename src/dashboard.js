import { Component } from 'react';
import { Container } from 'react-bootstrap';

import './styles/dashboard.css';

// importing components
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Container fluid>
          <Topbar />
          <Bottombar />
        </Container>
      </div>
    );
  }
}

export default Dashboard;
