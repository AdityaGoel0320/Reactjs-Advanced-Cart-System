import React from 'react'

export default function Intro() {
    let main_heading = document.getElementById("main_heading")

    let index = 1;
    let c = 0;
    let x = "FRONT-END";
    let typewriter = () => {
        let z = x.slice(0, index);
        if (index === x.length) {
            index = 1;
            if (c === 0) {
                x = "BackEnd Development"
                c = 1;
            }
            else if (c === 1) {
                x = "Mern Stack Development"
                c = 2;
            }
            else if (c === 2) {
                x = "FrontEnd Development"
                c = 0;
            }
        }
        else {
            index++;
        }
        main_heading.innerText = z;
        setTimeout(() => {
            typewriter()
        }, 500);
    }
    typewriter();


    return (
        <div>
            Welcome to my portfolio website! I'm <span>ADITYA GOEL</span>,
            I am into  <span><h1 class="main_heading" id="main_heading">gvvrfgrtg</h1></span>

            {/* animation linke jigar sable */}



        </div>
    )
}
