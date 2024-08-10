import React, {useEffect} from 'react';
import './app.css'
import Aos from "aos";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/ui/Hero";
import Services from "./components/ui/Services";
import Portfolio from "./components/ui/Portfolio";
import Contact from "./components/ui/Contact";
import Skills from "./components/ui/Skills";
import Top from "./components/top/Top";
const App = () => {
    useEffect(()=>{
       Aos.init();
    },[])
    return (
        <>
            <Top/>
        <Header/>
            <main>
                <Hero/>
                <Services/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </main>
        <Footer/>
        </>
    );
};

export default App;
