import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Events from './events/Events';
import Details from './details/Details';


const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Events} />
                <Route path="/details/:eventId" component={Details} />
                <Route path="/about" render={() => <p>Hola hola kawalerze, co u robisz?</p>} />
            </div>
        </Router>
    );
};




export default App;
