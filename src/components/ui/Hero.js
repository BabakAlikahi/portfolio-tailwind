import React from 'react';
import heroImg2 from '../../assets/images/hero/hero7.png';
import CountUp from "react-countup";
import {GoMail} from "react-icons/go";
import {LiaGithub, LiaLinkedin, LiaTelegram} from "react-icons/lia";


const Hero = () => {
    return (
        <section className='pt-0 ' id='about'>
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/*    hero left content*/}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos='fade-right' data-aos-duration='1500'
                            className='text-headingColor font-[600] text-[16px]'>hello welcome
                        </h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500'
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>im
                            babak alikahi<br/>front- end developer
                        </h1>
                        <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'
                             className="flex items-center gap-6 mt-7">
                            <a href="#contact"
                               className='flex items-center gap-2 bg-primaryColor text-white font-[500] hover:bg-smallTextColor ease-in duration-200 py-2 px-4 rounded-[8px]'><i><GoMail/></i>contact
                                me
                            </a>
                            <a href="#portfolio"
                               className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor rounded-[8px] hover:bg-primaryColor hover:text-white ease-in duration-200 py-2 px-4'>see
                                portfolio
                            </a>
                        </div>
                        <p data-aos='fade-left' data-aos-duration='1500'
                           className='text-headingColor mt-12 font-[500] text-[15px] leading-7'>
                            My name is Babak Ali Kahi and I am a front end developer. I have a bachelor's degree in information technology engineering. After completing programming courses, I decided to start working in the field of website designing
                        </p>
                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[600]">follow me : </span>
                            <span>
                                <a href="https://t.me/babak_alikahi" target='_blank' rel='noreferrer' className="text-smallTextColor text-[18px] font-[600]">
                                    <LiaTelegram/>
                                </a>
                            </span>
                            <span>
                                <a
                                    href='https://linkedin.com/in/babak-alikahi' target='_blank' rel='noreferrer'
                                    className="text-smallTextColor text-[18px] font-[600]" >
                                    <LiaLinkedin/>
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/babi1372" target='_blank' rel='noreferrer' className="text-smallTextColor text-[18px] font-[600]">
                                    <LiaGithub/>
                                </a>
                            </span>

                        </div>
                    </div>
                    {/*    hero left content end*/}
                {/*    hero img */}
                    <div className="basis-1/3 mt-10 sm:mt-0">
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg2} alt=""/>
                        </figure>
                    </div>
                {/*    hero img end */}
                {/*    hero content right */}
                    <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={3} duration={5} suffix='+'/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>years of Experience</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={100} duration={5} suffix='%'/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>success rate</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={20} duration={5} suffix='+'/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>happy clients</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={10} duration={5} suffix='+'/>
                            </h2>
                            <h4 className='text-headingColor font-[600] text-[18px]'>project complete</h4>
                        </div>
                    </div>
                {/*    hero content right end */}
                </div>
            </div>
        </section>
    );
};

export default Hero;