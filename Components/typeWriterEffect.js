import React from 'react';
import Typewriter from 'react-typewriter-effect';


const TypewriterEffect = () => {
    return (
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello, world!")
            .start(1000);
        }}




        
      />
    );
  };
  
  export default TypewriterEffect;
  