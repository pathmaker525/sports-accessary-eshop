import React from 'react';
import './Custom-Button.scss';

const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
            { children }
        </button>
    );
};

export default CustomButton;