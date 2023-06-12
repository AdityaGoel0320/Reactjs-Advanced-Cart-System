import React from 'react'

import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {

    return (
        <>
            <div  className=' bg-black text-white flex justify-between items-center m-1 p-5 sticky top-0 w-full left-0 bg-opacity-50 '>

                <div className='text-2xl font-bold'>
                    <h1>Logo</h1>
                </div>
                <div>



                    <ul className="flex justify-between items-center gap-5">
                        <a href=""><li>Home</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>Projects</li></a>
                        <a href="#contact"><li>Contact</li></a>
                        {/* <a href=""><li><DarkModeToggle/></li></a> */}
                    </ul>

                </div>

            </div>
        </>

    )
}
