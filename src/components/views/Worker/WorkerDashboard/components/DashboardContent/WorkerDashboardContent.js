import React from 'react'
import {Switch} from 'react-router-dom';

import Main from './Content/Home';
import ControllerRouter from '../../../../../routers/Controller';
import './style/Content.scss';

const WorkerDashboardContent = ({routes, agent_info}) => {

    const Home = window.location.pathname;

    return (
        <div className = "WorkerContent">
            {
                Home === '/Worker/Dashboard' ?
                <Main
                    info = {agent_info}
                />
                :
                null
            }
            <Switch>
                {
                    routes.map((route, key) => 
                        <ControllerRouter
                            key = {key}
                            {...route}
                        />
                    )
                }   
            </Switch>
        </div>
    )
}

export default WorkerDashboardContent
