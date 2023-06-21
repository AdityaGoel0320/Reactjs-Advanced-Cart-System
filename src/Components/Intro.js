import React from 'react';
import Typewriter from 'react-typewriter-effect';

import TypewriterEffect from './typeWriterEffect';

export default function Intro() {

    return (
        <>


            <div className='flex h-full items-center justify-center border border-8 border-red-700' id="intro">

                <div className=' border border-8 border-red-700'>

                <p className='flex gap-3 items-center'>
                    <img className='h-8' src="Images/wavyHand.png" alt=" " />
                    <span className='text-3xl'>Hey</span>
                </p>
                <br />
                I'm Aditya Goel
                <br />
                I am into <span>FRONTEND</span><br />
                I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.

                </div>

                <div className="profile">
                    <img src="Images/avatar.jpg" alt="" />
                </div>



               
            </div>
            {/* <button className=' text-3xl  tracking-in-contract-bck'>
                    Aditya goel
                </button> */}
        </>
    )
}
