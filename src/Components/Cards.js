import React from 'react'

export default function Cards(props) {
  return (
    <>
      <div className='cards_container flex items-center justify-center gap-3 flex-col'  >
        <img className='cards_container_img h-16' src={props.img} alt={props.name} />
        <h5 className='cards_container_name'>
          {props.name}
        </h5>
      </div>




    </>
  )
}
