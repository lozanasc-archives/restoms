import React from 'react';
import './style/Navigation.scss';
import Home from '../../../../assets/button-assets/dashboard-related/home.png';
import About from '../../../../assets/button-assets/dashboard-related/about.png';
import Api from '../../../../assets/button-assets/dashboard-related/api.png';
import Logo from '../../../../assets/restoms-logo/logo.png';
import { DashboardButton as NavButton } from '../../../common/Button/Button';



const ServiceMenuNavbar = ({SetHomeStatus, SetAboutStatus, SetApiStatus}) => {

    const NavButtonGroup = [
        {   
            isButtonLink: false,
            Contrast: true,
            ImageProperties: {
                src: Home,
                alt: "An image of a House",
                height: "25px",
                width: "25px"
            },
            ButtonFunction: () => {
                // ! Fix atm, so spaghetti... 👀
                SetHomeStatus(true);
                SetAboutStatus(false);
                SetApiStatus(false);
            }
        },
        {   
            isButtonLink: false,
            Contrast: true,
            ImageProperties: {
                src: About,
                alt: "A circle with a letter i inside it",
                height: "25px",
                width: "25px"
            },
            ButtonFunction: () => {
                SetHomeStatus(false);
                SetAboutStatus(true);
                SetApiStatus(false);
            }
        },
        {   
            isButtonLink: false,
            Contrast: true,
            ImageProperties: {
                src: Api,
                alt: "An image of a cog with API written on it",
                height: "25px",
                width: "25px"
            },
            ButtonFunction: () => {
                SetHomeStatus(false);
                SetAboutStatus(false);
                SetApiStatus(true);
            }
        }
    ]

    return (
        <div className = "ServiceMenuNavigation">
            <img className="Logo" src={Logo} alt="" height="50px" width="50px"/> 
            <div className="NavButtonGroup">
                {
                    NavButtonGroup.map((Props, key) =>
                        <NavButton
                            key = {key}
                            isButtonLink = {Props.isButtonLink}
                            isButtonContrast = {Props.Contrast}
                            ButtonImageProps = {Props.ImageProperties}
                            ButtonFunction = {Props.ButtonFunction}
                            Route = {Props.Route}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ServiceMenuNavbar
