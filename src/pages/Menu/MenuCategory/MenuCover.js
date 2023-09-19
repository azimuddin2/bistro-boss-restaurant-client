import React from 'react';

const MenuCover = ({ image, title }) => {
    return (
        <section
            className="hero max-w-screen-xl mx-auto bg-fixed"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                height: "600px"
            }}
        >
            <div className="hero-overlay bg-opacity-40"></div>
            <div
                className="hero-content text-center text-neutral-content w-3/4 mx-auto py-16"
                style={{ background: ' rgba(21, 21, 21, 0.60)' }}
            >
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-semibold uppercase text-white">{title}</h1>
                    <p className="mb-5">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </section>
    );
};

export default MenuCover;