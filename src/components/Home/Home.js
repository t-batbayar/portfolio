import React from 'react';

import AnimatedPageWrapper from '../../containers/AnimatedPageWrapper';

import './Home.css';
import HomeSection from './HomeSection/HomeSection';
import AboutSection from './AboutSection/AboutSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import Contact from './Contact/Contact';

const Home = () => {
    return (
      <AnimatedPageWrapper>
         <HomeSection />
         <AboutSection />
         <ProjectsSection />
         <Contact />
      </AnimatedPageWrapper>
    )
}

export default Home;