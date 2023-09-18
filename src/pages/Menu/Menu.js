import React from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import menuBgImage from '../../assets/Images/menu/menu-bg.jpg';

const Menu = () => {
    return (
        <section>
            <PageCover
                image={menuBgImage}
                title={"Our Menu"}
                details={"Would you like to try a dish?"}
            ></PageCover>
            <div>
                
            </div>
        </section>
    );
};

export default Menu;