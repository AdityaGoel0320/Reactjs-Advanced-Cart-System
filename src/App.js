import React from 'react';
import './App.css';
import TechStack from './Components/TechStack';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import ContactMe from './Components/ContactMe';
import Link from './Components/Link';


function App() {
  return (
    <>
      {/* <Link /> */}
      <Navbar />
      <Intro />
      <AboutMe />
      <TechStack />
      <Projects />
      <Achievements />
      <ContactMe />
      <Footer />

      <Achievements/>
    </>
  );














}

export default App;
