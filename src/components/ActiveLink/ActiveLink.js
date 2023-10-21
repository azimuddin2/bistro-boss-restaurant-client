import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className='uppercase font-semibold flex items-center mb-2 font-family'
            style={{
                color: match ? '#D99904' : '#151515',
                borderLeft: match ? '3px solid #D99904' : 'none',
                borderRadius: '0px',
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;