import React from 'react'

export default function Cards(props) {
  return (
    <>
      {/* <div className='cards_container'>
        <img className='cards_container_img' src={props.img} alt={props.name} />
        <h5 className='cards_container_name'>
          {props.name}
        </h5>
      </div> */}



      <div class="card m-24">
        {/* <div class="align">
          <span class="red"></span>
          <span class="yellow"></span>
          <span class="green"></span>
        </div> */}

        <h1>
          <img className='cards_container_img h-24 flex justify-center items-center' src={props.img} alt={props.name} />
        </h1>
        <p>
          {props.name}
        </p>
      </div>

    </>
  )
}
