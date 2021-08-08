import React from 'react';
import './style/Content.scss';

import Home from './Home';
import About from './About';
import Api from './Api';

const ServiceMenuContent = ({HomeStatus, AboutStatus, ApiStatus}) => {

    return (
        <div className = "MenuContentContainer">
            {
                HomeStatus ? 
                <Home/>
                :
                AboutStatus 
                ?
                <About/>
                :
                ApiStatus 
                ?
                <Api/>
                :
                null
            }
        </div>
    )
}

export default ServiceMenuContent
