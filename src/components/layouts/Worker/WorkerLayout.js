// Dependency Imports
import React from 'react';
import { WorkerProvider } from '../../contexts/WorkerContext';
// Component Imports
import {WorkerLogin as Login, WorkerRegistration as Registration, WorkerDashboard as Dashboard} from '../../views/Worker/WorkerView';

// Component Styling Import
import './style/WorkerLayout.scss';

// Login component for authenticating users
export const WorkerLogin = () => {
    return (
        <div className="WorkerLayoutContainer">
            <Login/>
        </div>
    )
};

// Registration component for adding Workers into the system
export const WorkerRegistration = () => {
    return (
        <div className="WorkerLayoutContainer">
            <Registration/>
        </div>
    )
};

// Dashboard component for viewing critical information
export const WorkerDashboard = ({routes}) => {
    return (
        <WorkerProvider>
            <div className="WorkerLayoutContainer">
                <Dashboard
                    routes = {routes}
                />
            </div>
        </WorkerProvider>
    )
}
