import React from 'react';
import frontEnd from '../../assets/images/services/front-end.png'
import apps from '../../assets/images/services/apps.png'
import backend from '../../assets/images/services/backend.png'
import design from '../../assets/images/services/design.png'

const Services = () => {
    return (
        <section id='services'>
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        what do i help
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>From
                        From the beginning of my activity, I decided to start as a freelancer. But after a few years, I realized that working as a team and being with a team can increase motivation and interest, and this can help the company to achieve its long-term goals.</p>
                </div>
                <div className="flex flex-col justify-center sm:py-6">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">
                            {/*    vertical line*/}
                            <div
                                className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
                            {/*    left card*/}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex relative item-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-right' data-aos-duration='1200'
                                                 className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>clean code</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    Writing clean code will greatly help other people's participation in the development and sustainability of projects.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute top-1  sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4  flex items-center justify-center">
                                        <figure>
                                            <img src={frontEnd} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/*    right card*/}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex relative item-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-left' data-aos-duration='1200'
                                                 className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Being responsible</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    No one likes to entrust their work to a person who has no obligation to do that work. For this reason, being responsible brings peace of mind and increases self-confidence
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 top-1  sm:top-1/2 transform -translate-x-1/2 -translate-y-4  flex items-center justify-center">
                                        <figure>
                                            <img src={apps} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/*    left card*/}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex relative item-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-right' data-aos-duration='1400'
                                                 className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Active and motivated</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    The world of programming is progressing every day, so it is necessary to always increase our knowledge and experience
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute top-1  sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-4  flex items-center justify-center">
                                        <figure>
                                            <img src={design} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            {/*    right card*/}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex relative item-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-left' data-aos-duration='1400'
                                                 className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>Fix bugs</h3>
                                                <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                                                    Elegance and high accuracy in work details and understanding the basic principles of design. and solving bugs in the project</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 top-1  sm:top-1/2 transform -translate-x-1/2 -translate-y-4  flex items-center justify-center">
                                        <figure>
                                            <img src={backend} alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;