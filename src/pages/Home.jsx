import React from "react";
import First from '../components/First'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Certificate from "../components/Certificate";

const Home = () => {
    return (
        <div>
            <First />
            <About />
            <Skills/>
            <Education/>
            <Projects/>
            <Certificate/>
            <Contact/>
        </div>
    )
}

export default Home ;
