import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from '../src/routes/private.routes';

import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import SearchEvent from './pages/SearchEvent';
import NewEvent from './pages/NewEvent';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/" exact component={Menu} />
            <Route path="/Menu/SearchEvent" component={SearchEvent} />
            <Route path="/Menu/NewEvent" component={NewEvent} />
        </BrowserRouter>
    )
}

export default Routes;