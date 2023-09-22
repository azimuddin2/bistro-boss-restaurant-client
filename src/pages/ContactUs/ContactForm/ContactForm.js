import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Button from '../../../components/Button/Button';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const ContactInfo = {
            name,
            email,
            phone,
            message
        };
        console.log(ContactInfo);

        form.reset();
    };

    return (
        <section className='mt-12'>
            <SectionTitle subHeading={'Send Us a Message'} heading={'Contact Form'}></SectionTitle>
            <div className='rounded-sm lg:p-8 mb-16' style={{ backgroundColor: '#F3F3F3' }}>
                <form onSubmit={handleSubmit} className="card-body px-5 md:px-8 lg:px-8">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text font-semibold">Name*</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter your name"
                                className="input rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text font-semibold">Email*</span>
                            </label>
                            <input
                                name='email'
                                type='email'
                                placeholder="Enter your email"
                                className="input rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Phone*</span>
                        </label>
                        <input
                            name='phone'
                            type='text'
                            placeholder="Enter your phone number"
                            className="input rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Message*</span>
                        </label>
                        <textarea
                            name='message'
                            rows='5'
                            placeholder="Write your message here..."
                            className="textarea rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <Button>Send Message <FiSend className='text-xl animate-pulse'></FiSend> </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;