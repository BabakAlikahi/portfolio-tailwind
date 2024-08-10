import React from 'react';
import portfolios from "../../assets/data/portfolioData";

const Modal = ({activeID, setShowModal}) => {
    const portfolio=portfolios.find(portfolio=>portfolio.id===activeID)

    return (
        <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
            <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-[55%] left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
                <div>
                    <fiqure>
                        <img className='rounded-[8px] w-full h-[250px]' src={portfolio.imgModal} alt=""/>
                    </fiqure>
                </div>
                <div className="">
                    <h2 className='text-xl text-headingColor font-[600px] my-2'>{portfolio.title}</h2>
                    <p className='text-[13px] leading-6 text-smallTextColor'>{portfolio.description}</p>
                    <div className="my-2 flex items-center gap-2 flex-wrap">
                        <h4 className='text-headingColor text-[12px] text-[500]'>technologies :</h4>
                        {
                            portfolio.technologies.map((item,index)=>(
                                <span
                                key={index}
                                className='bg-gray-200 py-1 px-2 rounded-[5px] text-[12px] leading-0'
                                >
                                    {item}
                                </span>
                            ))
                        }
                    </div>
                    {/*<a href={portfolio.siteUrl} target='_blank'>*/}
                    {/*    <button className='bg-primaryColor text-white py-2 px-4 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-200'>*/}
                    {/*        GitHub*/}
                    {/*    </button>*/}

                    {/*</a>*/}
                </div>
                <button
                    onClick={()=>setShowModal(false)}
                    className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>&times;</button>
            </div>
        </div>
    );
};

export default Modal;