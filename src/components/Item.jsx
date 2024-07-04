import React, { useState } from 'react'

const Item = (props) => {
  return (
    <div className={`item ${props.curOpen == props.i ? 'open': ''}`} onClick={() => {
        props.onOpen(props.i)
    }}>
    <p className='number'>{props.i <= 9 ? `0${props.i}`: `${props.i}`}</p>
    <p className='title'>{props.faq.title}</p>

    {props.curOpen == props.i && <div className='content-box'>{props.faq.text}</div>}

    </div>
  )
}

export default Item
