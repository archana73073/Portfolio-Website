import React from "react";
import First from '../components/First'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = () => {
    return (
        <div>
            <First />
            <About />
            <Skills/>
            <Projects/>
        </div>
    )
}

export default Home ;
