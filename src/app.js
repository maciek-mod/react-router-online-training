import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

import Events from './events/Events';
import NotFound from './not-found/NotFound';



const App = () => {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                      <NavLink exact to="/" activeStyle={{ fontWeight: 'bold', color: 'red'}}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'red'}}>About</NavLink>
                    </li>
                </ul>
                <Switch>

                    <Route path="/about" render={() => <p>Hola hola kawalerze, co u robisz?</p>} />
                    <Route path="/" component={Events} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};




export default App;
