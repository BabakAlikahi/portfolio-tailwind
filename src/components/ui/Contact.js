import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='pb-10'>
            <div className="container">
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>get in touch</h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]  ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12959.411997309408!2d51.33700554177761!3d35.7052348844815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2s!4v1688313766572!5m2!1sen!2s"
                            className='w-full h-full border-0' allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-full  md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                        <form action="" className="w-full">
                            <div className="mb-5">
                                <input
                                    name='fullName'
                                    type="text"
                                    placeholder='Enter Your Name'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder='Enter Your Email'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder='Subject'
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    placeholder='Write Your Message'
                                    rows={3}
                                    className='w-full p-3 focus:outline-none rounded-[5px]'
                                />
                            </div>
                            <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-primaryColor text-center ease-linear duration-150'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;