import React from 'react';
import { AdminLogin as Login, AdminDashboard as Dashboard, AdminRegistration as Registration} from '../../views/Admin/AdminView';
import { AdminProvider } from '../../contexts/AdminContext';
import './style/AdminLayout.scss';

export const AdminLogin = () => {
    return (
        <div className="AdminLayoutContainer">
            <Login/>
        </div>
    )
};

export const AdminRegistration = () => {
        return (
        <div className="AdminLayoutContainer">
            <Registration/>
        </div>
        )
};

export const AdminDashboard = ({routes}) => {
    return (
        <AdminProvider>
            <div className="AdminLayoutContainer">
                <Dashboard
                    routes = {routes}
                />
            </div>
        </AdminProvider>
    )
};
