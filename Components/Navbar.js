import React from 'react'

export default function Navbar() {

    return (
        <>
            <div className="fixed top-0 z-100 w-full opacity-50 mb-12">

                <div className='  flex justify-between items-center p-3 bg-black'>

                    <div className='text-2xl text-white font-bold'>
                        <h1>Logo</h1>
                    </div>
                    <div id='ul'>







                        <ul className="flex justify-between items-center gap-5 text-white">
                            <a href=""><li>Home</li></a>
                            <a href=""><li>About</li></a>
                            <a href="#projects"><li>Projects</li></a>
                            <a href="#contact"><li>Contact</li></a>
                            {/* <a href=""><li><DarkModeToggle/></li></a> */}
                        </ul>

                    </div>

                </div>
            </div>




        </>

    )
}
