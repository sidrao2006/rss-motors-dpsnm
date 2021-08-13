import React from 'react';
import ReactDOM from 'react-dom';
import Onboard from './onboard';
import DashBoard from './dashboard';

import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Onboard/> */}
    <DashBoard />
  </React.StrictMode>,
  document.getElementById('root')
);
