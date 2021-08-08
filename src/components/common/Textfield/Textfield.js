import React from 'react';
import './style/Textfield.scss';

const Textfield = props => {
    return (
        <input 
            type={props.Type} 
            className="Textfield" 
            placeholder={props.PlaceholderTitle}
            onChange = {props.HandleChange}
            name = {props.Name}
            value = {props.Value}
            min = {props.MinimumValue}
            style = {props.Style}
            {...props.Rest}
        />
    )
}

export default Textfield;