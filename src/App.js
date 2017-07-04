import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Events from '/events/Router';

const App = () => {
  return (
    <Router>
      <div>
        <Route to="/" component={Events} />
      </div>
    </Router>
  )
}