import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import Events from './events/Events';
import NotFound from './not-found/NotFound';
import Login from './login/Login';
import Settings from './settings/Settings';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>Strona domowa</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>O stronie</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeStyle={{ fontWeight: 'bold' }}>settings</NavLink>
          </li>
        </ul>

        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/settings" component={Settings} />
          <Route path="/about" render={() => <p>Ta super strona zawiera super wydarzenia z branży IT!</p>} />
          <Route path="/" component={Events} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
