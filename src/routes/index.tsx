import React, { useContext } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthContext from "../contexts/auth";

//import PublicRoutes from "../routes/private.routes";
//import PrivateRoutes from "../routes/public.routes";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Menu from '../pages/Menu';
import SearchEvent from '../pages/SearchEvent';
import NewEvent from '../pages/NewEvent';
import loadingGif from '../assets/images/Schedule.gif';


function CustomRoute({ isPrivate, ...rest }:any ) {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        //PROCURAR UMA SPLASH ART BONITINHA DEPOIS E ADICIONAR AQUI
    }

    if (isPrivate && !signed) {
        if(localStorage.getItem('token') != null) {
            return <Redirect to="/" />
        }else {
            return <Redirect to="/login" />
        }
    }

    return <Route {...rest} />;
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute path="/" exact component={Menu} />
            <CustomRoute path="/Register" component={Register} />
            <CustomRoute path="/Login" exact component={Login} />
            <CustomRoute path="/SearchEvent" component={SearchEvent} />
            <CustomRoute isPrivate exact path="/NewEvent" component={NewEvent} />
        </Switch>
    );
}




/*const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);
    return signed ? <PublicRoutes /> : <PrivateRoutes />;
};

export default Routes;*/