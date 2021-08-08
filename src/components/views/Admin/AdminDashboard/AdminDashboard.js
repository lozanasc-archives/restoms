import React, { useState , useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Content from './components/DashboardContent/AdminDashboardContent';
import Navigation from './components/AdminDashboardNavbar';
import './style/AdminDashboard.scss';

const Dashboard = ({routes}) => {

    const AdminInformationFormat = {
        Username: '',
        Fullname: '',
        AuthLevel: ''
    }
    
    const [AdminInformation, SetAdminInformation] = useState(AdminInformationFormat);

    useEffect(() => {
        SetAdminInformation({
            Username: localStorage.getItem('Username'),
            Fullname: '',
            AuthLevel: localStorage.getItem('AuthLevel'),
            Token: localStorage.getItem('AccessToken')
        });
    },[]);

    return (        
        AdminInformation.AuthLevel === 'Worker' ?
            <Redirect to = '/Worker/Dashboard'/>
                :    
            <div className='DashboardContainer'>
                <Navigation/>            
                <Content
                    routes = {routes}
                    agent_info = {AdminInformation}
                />
            </div>
    );
}

export default Dashboard;
