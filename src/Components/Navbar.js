import React from 'react'

import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {

    return (
        <>
            <div className='flex justify-between items-center m-1 p-5 fixed top-0 w-full left-0 bg-opacity-50 bg-slate-600 '>

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
