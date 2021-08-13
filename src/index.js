import React from 'react';
import ReactDOM from 'react-dom';
import Onboard from './onboard';
import Dashboard from './dashboard';

import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" children={<Onboard />} />

      <Switch>
        <Route path="/dashboard/:id" children={<Dashboard />} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
