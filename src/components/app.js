import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import {Route, Switch} from 'react-router-dom';
import Header from './header.js';
import NotFound from './not-found.js'
import Nav from './nav.js'

const App = () => (
    <div>
        <Nav/>
        <div>
        <Switch>
            <Route path="/" exact component={Header}/>
            <Route path="/404" component={NotFound}/>
        </Switch>
        </div>
    </div>
);

export default App;
