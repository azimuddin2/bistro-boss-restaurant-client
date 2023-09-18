import React from 'react';

const PageCover = ({ image, title, details }) => {
    return (
        <section
            className="hero min-h-screen max-w-screen-xl mx-auto"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
            }}
        >
            <div className="hero-overlay bg-opacity-40"></div>
            <div
                className="hero-content text-center text-neutral-content w-3/4 mx-auto py-16"
                style={{ background: ' rgba(21, 21, 21, 0.60)' }}
            >
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-semibold uppercase text-white">{title}</h1>
                    <p className="mb-5">{details}</p>
                </div>
            </div>
        </section>
    );
};

export default PageCover;