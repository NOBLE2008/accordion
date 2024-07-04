import React, { useState } from 'react'

const Item = (props) => {
  return (
    <div className={`item ${isOpen ? 'open': ''}`} onClick={() => {
        props.onOpen(props.i)
    }}>
    <p className='number'>{props.i <= 9 ? `0${props.i}`: `${props.i}`}</p>
    <p className='title'>{props.faq.title}</p>
    <p className='icon'>{isOpen ? '-' : '+'}</p>

    {props.curOpen == props.i && <div className='content-box'>{props.faq.text}</div>}

    </div>
  )
}

export default Item
