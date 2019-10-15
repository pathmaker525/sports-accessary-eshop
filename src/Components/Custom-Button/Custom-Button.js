import React from 'react';
import './Custom-Button.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <button className={`${inverted? 'inverted' : ''} custom-button`} {...otherProps}>
            { children }
        </button>
    );
};

export default CustomButton;