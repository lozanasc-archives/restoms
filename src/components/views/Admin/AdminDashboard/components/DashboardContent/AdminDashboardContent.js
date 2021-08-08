import React from 'react'
import { Switch } from 'react-router-dom';

// Component Imports
import Main from '../DashboardContent/Content/Home';
import ControllerRouter from '../../../../../routers/Controller';

// Styling Import
import "./style/Content.scss";

const AdminDashboardContent = ({routes, agent_info}) => {

    const Home = window.location.pathname;

    return (
        <div className="AdminContent">
                {
                    Home === '/Admin/Dashboard' ?
                    <Main
                        info = {agent_info}
                    />
                    :
                    null
                }
                <Switch>
                    {
                        routes.map((route, key) => (
                            <ControllerRouter
                                key = {key}
                                {...route}
                            />
                        ))
                    }
                </Switch>
        </div>
    )
}

export default AdminDashboardContent;