import React from 'react';
import './style/Button.scss';
import {Link as NavLink} from 'react-router-dom';

const Button = props => {
    return (
        props.isButtonLink ? 
            (
                <NavLink 
                    className={props.isButtonContrast ? 'Button ButtonContrast Link onActive' : 'Button Link onActive'}
                    role="button"
                    style = {{...props.Style}}
                    to={props.ButtonLinkRoute}
                    onClick={props.ButtonFunction}
                    exact = {props.exact}
                    > 
                    {props.ButtonContent}
                </NavLink>
            )
        :
            (
                <button 
                onClick={props.ButtonFunction}
                className={props.isButtonContrast ? 'Button ButtonContrast onActive' : 'Button onActive'}
                style = {{...props.Style}}
                type = {props.Type}
                >
                    {props.ButtonContent}
                </button>
            )
    );
}

export const DashboardButton = (props) => {
    return (
                props.isButtonLink ?
                <NavLink
                    className={props.isButtonContrast ? 'DashboardButton ButtonContrast onActive' : 'DashboardButton onActive'}
                    activestyle = {props.activeStyle}
                    to = {props.Route}
                    style = {{...props.Style}}
                    exact = {props.exact}
                >
                    <img 
                        src={props.ButtonImageProps.src} 
                        alt={props.ButtonImageProps.alt} 
                        height={props.ButtonImageProps.height} 
                        width = {props.ButtonImageProps.width}
                    />
                </NavLink>
                :
                <button
                    className={props.isButtonContrast ? 'DashboardButton ButtonContrast onActive' : 'DashboardButton onActive'}
                    onClick = {props.ButtonFunction}
                    type = {props.Type}
                >
                    <img 
                        src={props.ButtonImageProps.src} 
                        alt={props.ButtonImageProps.alt} 
                        height={props.ButtonImageProps.height} 
                        width = {props.ButtonImageProps.width}
                    />
                </button>
    );
}

export default Button;