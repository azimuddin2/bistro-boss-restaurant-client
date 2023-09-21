import React from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import contactUsImg from '../../assets/Images/others/contact-us.jpg';
import OurLocation from './OurLocation/OurLocation';
import ContactForm from './ContactForm/ContactForm';

const ContactUs = () => {
    return (
        <section>
            <PageCover
                image={contactUsImg}
                title={'Contact Us'}
                details={'Would you like to try a dish?'}
            ></PageCover>
            <div className='max-w-screen-lg lg:mx-auto mx-5 my-16'>
                <OurLocation></OurLocation>
                <ContactForm></ContactForm>
            </div>
        </section>
    );
};

export default ContactUs;