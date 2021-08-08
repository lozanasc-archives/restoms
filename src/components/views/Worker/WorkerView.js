import React from 'react';
import { Spring } from 'react-spring/renderprops';
import Login from './WorkerForms/Login/LoginForm';
import Register from './WorkerForms/Register/RegisterForm';
import Dashboard from './WorkerDashboard/WorkerDashboard';

export const WorkerLogin = () => {
    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >
            {
                props => <div style={{...props}}><Login/></div>
            }
        </Spring>
    );
};

export const WorkerRegistration = () => {
    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >
            {
                props => <div style={{...props}}><Register/></div>
            }
        </Spring>
            
    );
};

export const WorkerDashboard = ({routes}) => {
    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >
            {
                props => <div style={{...props}}><Dashboard routes = {routes} /></div>
            }
        </Spring>
    )
}