import React from 'react';
import {ImLocation} from "react-icons/im";
import {BsPhone} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";
import {SiGmail} from "react-icons/si";
import {AiFillMail} from "react-icons/ai";

const Top = () => {
    return (
        <div className='text-[14px] top sm:flex-row flex-col sm:gap-0 gap-3 flex justify-between bg-smallTextColor px-4 sm:py-0 py-5  text-white sm:h-[60px] h-full items-center'>
            <div className=" flex items-center">
                <span>
                    <ImLocation/>
                </span>
                <span>: tehran - Isfahan</span>
            </div>
            <div className=" flex items-center">
                <span>
                    <BsPhone/>
                </span>
                <span className={'ml-2'}>: +98 903-366-9504</span>
            </div>
            <div className=" flex items-center">
                <span><SiGmail/></span>
                <span className={'ml-2'}>: babak.babak2100@gmail.com
                    </span>
            </div>
        </div>
    );
};

export default Top;