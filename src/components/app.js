import React, {Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import {Route, Switch} from 'react-router-dom';
import Main from './main.js';
import NotFound from './not-found.js'
import Work from './work.js'
import Nav from './nav.js'
import '../assets/css/app.css'

const App = () => (
    <Fragment>
        <Nav/>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/work" exact component={Work}/>
            <Route path="/404" component={NotFound}/>
        </Switch>
    </Fragment>
);

export default App;
