import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ContactForm = () => {
    return (
        <section className='mt-12'>
            <SectionTitle subHeading={'Send Us a Message'} heading={'Contact Form'}></SectionTitle>
            <div className='rounded-xl lg:p-12 mb-16' style={{ backgroundColor: '#F3F3F3' }}>
                <form className="card-body px-4 md:px-8 lg:px-8">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text font-semibold">Name*</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter your name"
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
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
                                className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
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
                            className="input focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Message*</span>
                        </label>
                        <textarea
                            name='address'
                            rows='5'
                            placeholder="Write your message here..."
                            className="textarea focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            required
                        ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white capitalize">PAY</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;