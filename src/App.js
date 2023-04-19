import React from 'react';
import './App.css';
import TechStack from './Components/TechStack';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <h1>Portfolio Website</h1>


      


      <div class="context">
      <TechStack />

        {/* <h1>Pure Css Animated Background</h1> */}
    </div>


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >



<div class="hero"> 
      <TechStack />
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>


    </>
  );
}

export default App;
