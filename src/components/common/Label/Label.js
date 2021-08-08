import React from 'react';
import './style/Label.scss';

const Label = (props) => {
    // The ternary operator returns either Label 
    // or the Label-Contrast on the state value of useContrast
    return (
    <strong>
        <p
        style = {props.Style} 
        className={props.isLabelContrast ? 'Label LabelContrast' : 'Label'}
        onClick = {props.LabelFunction}
        > 
            {props.LabelContent} 
        </p>
    </strong>
    );
}

export default Label;