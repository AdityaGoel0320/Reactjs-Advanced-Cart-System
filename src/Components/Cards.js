import React from 'react'

export default function Cards(props) {
  return (
    <div className='cards_container'>
        {props.name}
        <img src={props.img} alt="ergrvfbgf" />
    </div>
  )
}
