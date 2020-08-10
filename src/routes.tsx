import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Menu" component={Menu} />
        </BrowserRouter>
    )
}

export default Routes;