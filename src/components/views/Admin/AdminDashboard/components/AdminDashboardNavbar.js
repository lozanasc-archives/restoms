import React, { useContext  } from 'react';
import { DashboardButton as NavButton } from '../../../../common/Button/Button';
import { AuthContext } from '../../../../contexts/AuthContext'; 
import Logo from '../../../../../assets/restoms-logo/logo.png';
import Home from '../../../../../assets/button-assets/dashboard-related/home.png';
import Orders from '../../../../../assets/button-assets/dashboard-related/orders.png';
import Products from '../../../../../assets/button-assets/dashboard-related/products.png';
import Settings from '../../../../../assets/button-assets/dashboard-related/settings.png';
import Logout from '../../../../../assets/button-assets/dashboard-related/logout.png';
import "./style/Navigation.scss";

const NavButtonGroup = [
    {   
        isButtonLink: true,
        Contrast: true,
        ImageProperties: {
            src: Home,
            alt: "An image of a House",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard'
    }
    ,
    {
        isButtonLink: true,
        Contrast: true,
        ImageProperties: {
            src: Products,
            alt: "An image of an opened box",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard/Inventory'
    }
    ,
    {
        isButtonLink: true,
        Contrast: true,
        ImageProperties: {
            src: Orders,
            alt: "An image of a Paper sheet with writings",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard/Transactions'
    }
    ,
    {
        isButtonLink: true,
        Contrast: true,
        ImageProperties: {
            src: Settings,
            alt: "An image of a Cog",
            height: "25px",
            width: "25px"
        },
        Route: '/Admin/Dashboard/Settings'
    }
]

const AdminDashboardNavbar = () => {

    const {LogOff} = useContext(AuthContext);

    return (
        <div className="AdminNavigation">
            <img className="Logo" src={Logo} alt="" height="50px" width="50px"/> 
                <div className="NavButtonGroup">
                    {
                        NavButtonGroup.map((Props, key) => 
                            <NavButton
                                key = {key}
                                isButtonLink = {Props.isButtonLink}
                                isButtonContrast = {Props.Contrast}
                                ButtonImageProps = {Props.ImageProperties}
                                Route = {Props.Route}
                            />
                            )
                    }
                </div>
            <NavButton
                    isButtonContrast = {true}
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

export default AdminDashboardNavbar
