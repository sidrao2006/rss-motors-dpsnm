import React from 'react';
import ReactDOM from 'react-dom';
import Onboard from './onboard';
import Dashboard from './dashboard';

import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setTheme } from './utils/functions';

ReactDOM.render(
  <React.StrictMode>
    {
      // Immediately invoked function to set the theme on initial load
      (function () {
        if (localStorage.getItem('theme') === 'theme-dark') {
          setTheme('theme-dark');
        } else {
          setTheme('theme-light');
        }
      })()
    }
    <Router>
      <Route exact path="/" children={<Onboard />} />

      <Switch>
        <Route path="/dashboard/:id" children={<Dashboard />} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
