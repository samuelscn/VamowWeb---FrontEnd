import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Menu from '../pages/Menu';
import SearchEvent from '../pages/SearchEvent';

function PublicRoutes() {
    return (
        <BrowserRouter>
            <Route name="Login" component={Login} />
        </BrowserRouter>
    );
}

export default PublicRoutes;