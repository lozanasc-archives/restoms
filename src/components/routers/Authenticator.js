import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
// {component: Component, routes, RedirectPath, ...rest}
const AuthenticatorRoute = (route) => {
    
    const {AuthStatus} = useContext(AuthContext);

    return (
        <Route
            path = {route.path}
            render = {renderProps => (
                !AuthStatus ?
                <route.component {...renderProps}/>
                :
                <Redirect
                    to = {{pathname: route.RedirectPath}}
                />
            )}
        />
    )
}

export default AuthenticatorRoute;
