import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NewEvent from '../pages/NewEvent';

function PrivateRoutes() {
    return (
        <BrowserRouter>
            <Route name="NewEvent" component={NewEvent} />
        </BrowserRouter>
    );
}
export default PrivateRoutes;