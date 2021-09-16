import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import MasterRoutes from './MasterRoutes';
import { AuthProvider } from '../../contexts/AuthContext';
import ControllerRouter from '../../routers/Controller';
import NotFound from '../NotFound/NotFound';

const Master = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                        {
                            MasterRoutes.map((routes, key) => (
                                <ControllerRouter
                                    key = {key}
                                    {...routes}
                                />
                            ))
                        }  
                    <ControllerRouter
                        path =  '/404'
                        component = {NotFound}
                        AuthStatus =  {false}
                        RouteType =  'public'
                        strict =  {true}
                        exact =  {true}
                    />
                    <Redirect to='/404'/>
                </Switch>
            </Router>
        </AuthProvider>    
    );
}

export default Master;
