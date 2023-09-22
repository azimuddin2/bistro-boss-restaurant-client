import React from 'react';
import './Button.css';

const Button = ({children}) => {
    return (
        <button className="btn text-white capitalize button">{children}</button>
    );
};

export default Button;