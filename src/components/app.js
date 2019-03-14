import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Header from './header.js';
import Nav from './nav.js'

const App = () => (
    <div>
        <Nav/>
    <Router>
        <Switch>
            <Route exact path="/" component={Header}/>
        </Switch>
    </Router>
    </div>
);

export default App;
