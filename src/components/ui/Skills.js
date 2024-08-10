import React from 'react';
import skillsData from "../../assets/data/skillsData";
const data=skillsData


const Skills = () => {
    return (
        <section id='skills' className='pt-0'>
            <div className="container ">
                <div className="text-center">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        my ability and skills
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                        I prepared a set of my skills and abilities in the field of front end and I wanted to share them
                        with you
                    </p>
                </div>
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        data.map((item,index)=>(
                            <div data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' key={index.toString()} className='rounded text-headingColor shadow-lg w-[46%] group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[23.5%] text-center p-5 hover:bg-smallTextColor hover:text-white hover:bg-opacity-80'>
                                <h2 className="font-[800] text-[35px] mb-5 ">
                                    {item.icon}
                                </h2>
                                <p className='lg:max-w-[600px] lg:mx-auto font-[700] text-[20px] leading-7'>
                                    {item.title}
                                </p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </section>
    );
};

export default Skills;