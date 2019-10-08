import React from 'react';
import './Custom-Button.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            { children }
        </button>
    );
};

export default CustomButton;