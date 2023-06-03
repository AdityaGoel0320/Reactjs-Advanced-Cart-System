import React from 'react';
import Typewriter from 'react-typewriter-effect';

import TypewriterEffect from './typeWriterEffect';

export default function Intro() {
    // let h1 = document.getElementById("h1")
    // console.log(h1)
    // let index = 1;
    // let c = 0;
    // let x = 0;
    // x = "FRONT-END";
    // let typewriter = () => {
    //     let z = x.slice(0, index);
    //     if (index == x.length) {
    //         index = 1;
    //         if (c == 0) {
    //             x = "BackEnd Development"
    //             c = 1;
    //         }
    //         else if (c == 1) {
    //             x = "Mern Stack Development"
    //             c = 2;
    //         }
    //         else if (c == 2) {
    //             x = "FrontEnd Development"
    //             c = 0;
    //         }
    //     }
    //     else {
    //         index++;
    //     }
    //     h1.innerText = z;
    //     setTimeout(() => {
    //        typewriter() ; 
    //     }, 500);
    // }
    // typewriter();


    return (
        <>
            <div className=''>

                <p className='flex gap-3 items-center'>
                    <img className='h-8' src="../Images/wavyHand.png" alt=" " /><span className='text-3xl'>Hey</span>
                </p>

                <p>
                I'm Aditya Goel
                </p>
                <p>
                    I am into <TypewriterEffect />
                </p>
            </div>
        </>
    )
}
