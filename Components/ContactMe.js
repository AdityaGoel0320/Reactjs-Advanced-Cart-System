import React from 'react'
// import img from "../Images/contact.jpg"
export default function ContactMe() {
  return (
    <>
      <div id="contact" className='uppercase  bg-yellow-300 h-72'>
        <h1 className='text-3xl font-bold uppercase flex justify-center items-center m -5'>

          ContactMe
        </h1>

        <div className='flex items-center justify-center gap-3 '>


          <div>
            <form action="post" >
              <div className="flex items-center justify-center gap-3  flex-col">
                <span className='flex items-center justify-center gap-3 '>
                  <label htmlFor="name">name</label>
                  <input type="text" placeholder='name' />

                </span>
                <span className='flex items-center justify-center gap-3 '>

                  <label htmlFor="meassage">messeage</label>
                  <input type="text" placeholder='message' />

                </span>
                <span className='flex items-center justify-center gap-3 '>

                  <label htmlFor="email">eamil</label>
                  <input type="text" placeholder='email' />
                </span>
              </div>

            </form>
          </div>

          <img className='h-24' src="../Images/contact.jpg" alt="erhrtht" />


        </div>

      </div>
    </>
  )
}
