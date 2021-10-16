import React from 'react';
import './Banner.css';

const Banner = ({ children, title, subtitle }) => {
    return (
        <>
            <div className="banner px-10 py-8 sm:rounded-lg">
                <h1 className="text-6xl sm:text-9xl font-semibold">{title}</h1>
                <hr />
                <p className="py-2">{subtitle}</p>
                {children}
            </div>
        </>
    );
};

export default Banner;