
import React from 'react';
import "./button.css"

const Button = ({ onClick, buttonText, styleName }) => {
    return (
        <div>
            <button styleName={styleName} onClick={onClick}>{buttonText}</button>
        </div>
    );
};

export default Button;