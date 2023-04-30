import React from 'react';
import './App.css';
import TechStack from './Components/TechStack';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutMe />
      <TechStack />
      <Projects />
      <ContactMe />
      <Footer />
      {/* <Achievements/> */}
    </>
  );
}

export default App;
