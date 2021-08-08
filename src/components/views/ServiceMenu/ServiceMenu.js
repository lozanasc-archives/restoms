import React , {useState} from 'react'
import { Spring } from 'react-spring/renderprops';
import Navigation from './components/ServiceMenuNavbar';
import Content from './components/Content/ServiceMenuContent';
import './style/ServiceMenu.scss';

const ServiceMenu = () => {

    const Root = window.location.pathname;

    const [HomeStatus, SetHomeStatus] = useState(false || Root === '/');
    const [AboutStatus, SetAboutStatus] = useState(false);
    const [ApiStatus, SetApiStatus] = useState(false);

    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >   
            {
                props => 
                <div className="ServiceMenu" style={{...props}}>
                    <Navigation
                        SetHomeStatus = {SetHomeStatus}
                        SetAboutStatus = {SetAboutStatus}
                        SetApiStatus = {SetApiStatus}
                    />
                    <Content
                        HomeStatus = {HomeStatus}
                        AboutStatus = {AboutStatus}
                        ApiStatus = {ApiStatus}
                    />
                </div>
            }
        </Spring>
    )
}

export default ServiceMenu;