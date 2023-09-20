import React from 'react';

const PageCover = ({ image, title, details }) => {
    return (
        <section
            className="hero max-w-screen-xl mx-auto bg-fixed"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                height: '600px'
            }}
        >
            <div className="hero-overlay bg-opacity-40"></div>
            <div
                className="hero-content text-center text-neutral-content w-11/12 md:w-3/4 mx-auto py-16 lg:py-20"
                style={{ background: ' rgba(21, 21, 21, 0.60)' }}
            >
                <div className="max-w-md">
                    <h1 className="mb-3 text-5xl font-semibold uppercase text-white font-family">{title}</h1>
                    <p className="text-sm uppercase text-white font-family">{details}</p>
                </div>
            </div>
        </section>
    );
};

export default PageCover;