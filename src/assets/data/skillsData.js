import {AiFillHtml5} from "react-icons/ai";
import {PiFileCss, PiWebhooksLogo} from "react-icons/pi";
import {FaBootstrap, FaSass} from "react-icons/fa";
import {BiLogoJavascript, BiLogoJquery, BiLogoReact, BiLogoTailwindCss} from "react-icons/bi";
import {SiNextdotjs, SiTypescript} from "react-icons/si";
import {TbApi, TbBrandRedux} from "react-icons/tb";
import {DiResponsive} from "react-icons/di";
import {IoLogoReact} from "react-icons/io5";
import React from "react";

const skillsData = [
    {
        title: "html",
        icon:<AiFillHtml5 className='text-center mx-auto'/>
    },
    {
        title: "css",
        icon:<PiFileCss className='text-center mx-auto'/>
    },
    {
        title: "sass",
        icon:<FaSass className='text-center mx-auto'/>
    },
    {
        title: "bootstrap",
        icon:<FaBootstrap className='text-center mx-auto'/>
    },
    {
        title: "tailwind",
        icon:<BiLogoTailwindCss className='text-center mx-auto'/>
    },
    {
        title: "jquery",
        icon:<BiLogoJquery className='text-center mx-auto'/>
    },
    {
        title: "javascript",
        icon:<BiLogoJavascript className='text-center mx-auto'/>
    },
    {
        title: "react.js",
        icon:<BiLogoReact className='text-center mx-auto'/>
    },
    {
        title: "next.js",
        icon:<SiNextdotjs className='text-center mx-auto'/>
    },
    {
        title: "Api",
        icon:<TbApi className='text-center mx-auto'/>
    },
    {
        title: "responsive",
        icon:<DiResponsive className='text-center mx-auto'/>
    },
    {
        title: "typeScript",
        icon:<SiTypescript className='text-center mx-auto'/>
    },
    {
        title: "redux-toolkit",
        icon:<TbBrandRedux className='text-center mx-auto'/>
    },
    {
        title: "react-hooks",
        icon:<PiWebhooksLogo className='text-center mx-auto'/>
    },

    {
        title: "reactstrap",
        icon:<IoLogoReact className='text-center mx-auto'/>
    },




];

export default skillsData