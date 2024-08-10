import React from 'react';
import {data} from "autoprefixer";

const Footer = () => {
    const year= new Date().getFullYear()
    return (
        <footer className='bg-[#12141e] text-white py-8 flex justify-center'>
            <p className='text-sm'>Copyright {year} developed by babak alikahi - all right reserved</p>
        </footer>
    );
};

export default Footer;