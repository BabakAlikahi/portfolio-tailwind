import React, {useEffect, useRef} from 'react';
import {RxResume} from "react-icons/rx";
import {FiMenu} from "react-icons/fi";
import resume from "../../assets/resume/MyResume.zip"
const Header = () => {
    const headerRef=useRef(null);
    const menuRef=useRef(null);
    const stickyHeader = () => {
      window.addEventListener('scroll',()=>{
          if (document.body.scrollTop>80 || document.documentElement.scrollTop>80){
              headerRef.current.classList.add('sticky_header')
          }else{
              headerRef.current.classList.remove('sticky_header')
          }
      })
    }
    useEffect(()=>{
        stickyHeader()
        return window.removeEventListener('scroll',stickyHeader)
    },[])

    const handelClick = e => {
      e.preventDefault();
      const targetAttr=e.target.getAttribute('href');
      const location=document.querySelector(targetAttr).offsetTop;
      window.scrollTo({
          top:location -80,
          left : 0
      })
    }
    const toggleMenu=()=>{
        menuRef.current.classList.toggle('show_menu')
    }
    return (
        <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/*logo*/}
                    <div className="flex items-center gap-[10px]">
                        <span
                            className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full  text-center leading-[35px]">
                            B
                        </span>
                        <div className="leading-[20px]">
                            <h2 className="text-xl text-smallTextColor font-[700]">Babak</h2>
                            <p className="text-[14px] text-smallTextColor font-[500]">Alikahi</p>
                        </div>
                    </div>
                    {/*    logo end*/}
                    {/*    menu start*/}
                    <div className="menu" ref={menuRef} onClick={toggleMenu}>
                        <ul className='flex items-center gap-10'>
                            <li>
                                <a onClick={handelClick} className='text-smallTextColor font-[600]' href="#about">about</a>
                            </li>
                            <li>
                                <a onClick={handelClick} className='text-smallTextColor font-[600]' href="#services">services</a>
                            </li>
                            <li>
                                <a onClick={handelClick} className='text-smallTextColor font-[600]' href="#skills">skills</a>
                            </li>
                            <li>
                                <a onClick={handelClick} className='text-smallTextColor font-[600]' href="#portfolio">portfolio</a>
                            </li>
                            <li>
                                <a onClick={handelClick} className='text-smallTextColor font-[600]' href="#contact">contact</a>
                            </li>
                        </ul>
                    </div>
                    {/*    menu end*/}

                    {/*    menu right*/}
                    <div className="flex items-center gap-4">
                        <a
                            download='download'
                            href={resume}
                            className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]
                            hover:bg-smallTextColor hover:text-white  ease-in duration-200'>
                            <i><RxResume/></i>
                            Resume
                        </a>
                        <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'><FiMenu/></span>
                    </div>
                    {/*    menu right end*/}
                </div>
            </div>
        </header>
    );
};

export default Header;