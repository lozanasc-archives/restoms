import React , { useState , useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './style/WorkerDashboard.scss';
import Navigation from './components/WorkerDashboardNavbar';
import Content from './components/DashboardContent/WorkerDashboardContent';
const WorkerDashboard = ({routes}) => {

    const WorkerInformationFormat = {
        Username: '',
        Fullname: '',
        AuthLevel: '',
    }

    const [WorkerInformation, SetWorkerInformation] = useState(WorkerInformationFormat);

    useEffect(() => {
        SetWorkerInformation({
            Username: localStorage.getItem('Username'),
            Fullname: '',
            AuthLevel: localStorage.getItem('AuthLevel'),
            Token: localStorage.getItem('AccessToken')
        });
    },[]);

    return (
        WorkerInformation.AuthLevel === 'Admin' ?
            <Redirect to = '/Admin/Dashboard'/>
                :
            <div className="WorkerDashboardContainer">
                <Navigation/>
                <Content
                    routes = {routes}
                    agent_info = {WorkerInformation}
                />
            </div>
    )
}

export default WorkerDashboard;