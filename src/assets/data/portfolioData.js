import port1 from "../images/portfolio/01_CNC/port1.png";
import port2 from "../images/portfolio/01_CNC/port2.png";
import port3 from "../images/portfolio/02_Wira/port3.png";
import port4 from "../images/portfolio/02_Wira/port4.png";
import port5 from "../images/portfolio/03_Port/port5.png";
import port6 from "../images/portfolio/03_Port/port6.png";
import port7 from "../images/portfolio/04_keyboard/port7.png";
import port8 from "../images/portfolio/04_keyboard/port8.png";
import port9 from "../images/portfolio/05_PortR/port9.png";
import port10 from "../images/portfolio/05_PortR/port10.png";
import port11 from "../images/portfolio/06_Crud/port11.png";
import port12 from "../images/portfolio/06_Crud/port12.png";
import port13 from "../images/portfolio/07_Recipe/port13.png";
import port14 from "../images/portfolio/07_Recipe/port14.png";
import port15 from "../images/portfolio/08_Personal/port15.png";
import port16 from "../images/portfolio/08_Personal/port16.png";

const portfolios = [
    {
        id: "01",
        imgUrl: port1,
        imgModal: port2,
        category: "Front-End",
        title: "cnc equipment store website",
        description: "This project was done as a freelancer. In this project, all the pages are designed using PSD. In this project, there were interesting challenges, such as price range, printing pages, etc.",
        technologies: ["html", "css", "bootstrap", "jquery", "javascript", "psd to html", "responsive"],
        siteUrl: "#",
        siteDemo: "#",
    },
    {
        id: "02",
        imgUrl: port3,
        imgModal: port4,
        category: "Front-End",
        title: "Customer club website",
        description:
            "This project was done remotely for vira system poya company. In this project, I was in contact with the programmer and graphics team members. And all the pages were uploaded in Figma and in this way I designed the pages",
        technologies: ["html", "css", "bootstrap", "jquery", "javascript", "figma", "responsive", "fontawesome", "sass"],
        siteUrl: "#",
        siteDemo: "#",
    },
    {
        id: "03",
        imgUrl: port5,
        imgModal: port6,
        category: "Front-End",
        title: "Simple portfolio template",
        description:
"The project was done as a freelancer, it was done in the form of a university project. And all the points that the employer needed to be implemented were done.",
        technologies: ["html", "css", "bootstrap", "responsive", "fontawesome", "sass"],
        siteUrl: "#",
    },
    {
        id: "04",
        imgUrl: port7,
        imgModal: port8,
        category: "Front-End",
        title: "2 language virtual keyboard",
        description:
            "In this project, the employer lived in Korea. He has requested a virtual keyboard plugin in 2 languages, English and Korean. which consists of 2 separate parts, typing letters and typing numbers. The rules of Korean letters have been one of the most beautiful challenges of this project",
        technologies: ["html", "css", "bootstrap", "jquery", "javascript", "responsive"],
        siteUrl: "#",
    },
    {
        id: "05",
        imgUrl: port9,
        imgModal: port10,
        category: "React",
        title: "My First React App",
        description:
            "After a long time, when I started my activity again. I decided to go for react.js. And after watching tutorials and learning tips, the first project I made with rwact.js consists of several components and custom hooks.",
        technologies: ["html", "css", "reactstrap", "react", "react-icons", "responsive"],
        siteUrl: "#",
    },
    // {
    //     id: "06",
    //     imgUrl: port11,
    //     imgModal: port12,
    //     category: "React",
    //     title: "Crud App With react redux-toolkit",
    //     description:
    //         "In this project, with the help of json server, I have performed four main operations including: insert, delete, update, select. I was able to understand the rest api issue. Also, in this project, I have used redux-tollkit and AsyncThunk to send commands and receive responses from the server side.",
    //     technologies: ["html", "css", "reactstrap", "react", "redux", "redux-toolkit", "AsyncThunk", "react-router", "react hooks"],
    //     siteUrl: "#",
    // },
    {
        id: "07",
        imgUrl: port13,
        imgModal: port14,
        category: "React",
        title: "Recipe App",
        description:
            "In this project, in order to receive and display information about food items and how to cook them by hand, we must enter the desired food name in the search field, then send the order to the server, after receiving an answer from the server, we will display it to the user.",
        technologies: ["html", "css", "react", "redux", "react-router", "Api", "react hooks"],
        siteUrl: "#",
    },
    {
        id: "08",
        imgUrl: port15,
        imgModal: port16,
        category: "React",
        title: "portfolio app with tailwind",
        description:
            "In the last project that you are watching online, I used the amazing Tailwind library. And in my opinion, Tailwind is one of the best libraries in the front-end section. Fast coding, no need to write external CSS codes, and it is very helpful in MediaQuery.",
        technologies: ["html", "css", "react", "tailwind", "react-icons", "Api"],
        siteUrl: "#",
    },

];

export default portfolios;
