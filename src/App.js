import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import Events from './events/Events';
import NotFound from './not-found/NotFound';

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
        </ul>

        <Switch>
          <Route exact path="/" component={Events} />
          <Route path="/details" component={Events} />
          <Route path="/about" render={() => <p>Ta super strona zawiera super wydarzenia z branży IT!</p>} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
