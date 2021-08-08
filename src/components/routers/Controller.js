import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import AuthenticatorRoute from './Authenticator';
import ProtectedRoute from './Protected';
const ControllerRouter = (route) => {

    return (
        <>
            {
                route.RouteType === 'public' &&
                <Route
                    path = {route.path}
                    render = {routeProps => (
                        <route.component {...routeProps} routes = {route.routes} />
                    )}
                />
            }
            {(route.RouteType === 'authenticator') && <AuthenticatorRoute {...route}/>}
            {(route.RouteType === 'protected') && <ProtectedRoute {...route}/>}
        </>
    );
}

export default ControllerRouter;