import { Component } from 'react';
import { Container } from 'react-bootstrap';

import './styles/dashboard.css';

// importing components
import Topbar from './components/Topbar';

// importing bootstrap stylings
import 'bootstrap/dist/css/bootstrap.min.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard"> 
      <Topbar/>
      </div>
    );
  }
}

export default Dashboard;
