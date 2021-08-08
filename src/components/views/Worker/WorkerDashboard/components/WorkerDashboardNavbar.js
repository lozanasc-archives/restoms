import React , { useContext } from 'react'

import {DashboardButton as WorkerNavButton} from '../../../../common/Button/Button';
import { AuthContext } from '../../../../contexts/AuthContext';
import Logo from '../../../../../assets/restoms-logo/logo.png';
import Home from '../../../../../assets/button-assets/dashboard-related/home.png';
import Products from '../../../../../assets/button-assets/dashboard-related/products.png';
import Orders from '../../../../../assets/button-assets/dashboard-related/orders.png';
import Settings from '../../../../../assets/button-assets/dashboard-related/settings.png';
import Logout from '../../../../../assets/button-assets/dashboard-related/logout.png';
import './style/Navigation.scss';

const NavButtonGroup = [
    {   
        isButtonLink: true,
        Contrast: false,
        ImageProperties: {
            src: Home,
            alt: "An image of a House",
            height: "25px",
            width: "25px"
        },
        Route: '/Worker/Dashboard'
    }
    ,
    {
        isButtonLink: true,
        Contrast: false,
        ImageProperties: {
            src: Products,
            alt: "An image of an opened box",
            height: "25px",
            width: "25px"
        },
        Route: '/Worker/Dashboard/Inventory'
    }
    ,
    {
        isButtonLink: true,
        Contrast: false,
        ImageProperties: {
            src: Orders,
            alt: "An image of a Paper sheet with writings",
            height: "25px",
            width: "25px"
        },
        Route: '/Worker/Dashboard/Transactions'
    }
    ,
    {
        isButtonLink: true,
        Contrast: false,
        ImageProperties: {
            src: Settings,
            alt: "An image of a Cog",
            height: "25px",
            width: "25px"
        },
        Route: '/Worker/Dashboard/Settings'
    }
]

const WorkerDashboardNavbar = () => {

    const {LogOff} = useContext(AuthContext);

    return (
        <div className="WorkerNavigation">
            <img className="Logo" src={Logo} alt="" height="50px" width="50px"/>
            <div className="NavButtonGroup">
                {
                    NavButtonGroup.map((Props, key) => 
                        <WorkerNavButton
                            key = {key}
                            isButtonLink = {Props.isButtonLink}
                            isButtonContrast = {Props.Contrast}
                            ButtonImageProps = {Props.ImageProperties}
                            Route = {Props.Route}
                        />
                    )
                }
            </div>
            <WorkerNavButton
                    isButtonContrast = {false}
                    isButtonLink = {false}
                    ButtonFunction = {e => {
                        e.preventDefault();
                        LogOff();
                    }}
                    ButtonImageProps = {
                        {
                            src: Logout,
                            alt: "An image of a door with an arrow pointing left",
                            height: "25px",
                            width: "25px"
                        }
                    }
                    Route = "/Admin/Login"
            />
        </div>
    )
}

export default WorkerDashboardNavbar;
