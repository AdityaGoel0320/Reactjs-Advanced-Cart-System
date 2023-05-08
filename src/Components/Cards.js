import React from 'react'

export default function Cards(props) {
  return (
    <div className='cards_container'>
      <img className='cards_container_img'  src={props.img} alt={props.name} />
      <h5 className='cards_container_name'>
        {props.name}
      </h5>
    </div>
  )
}
