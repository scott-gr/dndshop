import React from 'react';
import "./button.css"

function Button(props) {
    return (
        <div>
            <button onClick={props.onClick}>{props.buttonText}</button>
        </div>
    );
};

export default Button;