import { Component } from 'react';

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
