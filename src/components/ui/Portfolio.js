import React, {useEffect, useState} from 'react';
import data from '../../assets/data/portfolioData'
import Modal from "./Modal";
const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const showModalHandler = id => {
        setShowModal(true);
        setActiveID(id)
    }
    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }
    useEffect(() => {
        if (selectTab === 'all') {
            setPortfolios(data)
        }
        if (selectTab === 'Front-End') {
            const filterData = data.filter(item => item.category === 'Front-End');
            setPortfolios(filterData)
        }
        if (selectTab === 'React') {
            const filterData = data.filter(item => item.category === 'React');
            setPortfolios(filterData)
        }
    }, [selectTab])
    return (
        <section id="portfolio">
            <div className="container">
                {/*Button*/}
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className='text-headingColor text-[2rem] font-[700]'>my recent project</h3>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setSelectTab('all')}
                            className='text-smallTextColor rounded-[8px] border border-solid border-smallTextColor py-2 px-4'>
                            All
                        </button>
                        <button
                            onClick={() => setSelectTab('Front-End')}
                            className='text-smallTextColor rounded-[8px] border border-solid border-smallTextColor py-2 px-4'>
                            Front-End
                        </button>
                        <button
                            onClick={() => setSelectTab('React')}
                            className='text-smallTextColor rounded-[8px] border border-solid border-smallTextColor py-2 px-4'>
                            React
                        </button>
                    </div>
                </div>
                {/*Boxes*/}
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        portfolios?.slice(0, nextItems)?.map((item, index) => (
                            <div key={index} data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000'
                                 className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure>
                                    <img className='rounded-[8px]' src={item.imgUrl} alt=""/>
                                </figure>
                                <div
                                    className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <button
                                            onClick={()=>showModalHandler(item.id)}
                                            className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                                            See Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/*Load More*/}
                <div className="text-center mt-6">
                    {nextItems < portfolios.length && data.length > 6 && (
                        <button onClick={loadMoreHandler}
                                className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                            Load More
                        </button>
                    )}
                </div>

            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }
        </section>
    );
};

export default Portfolio;