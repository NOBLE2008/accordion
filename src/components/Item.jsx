import React, { useState } from 'react'

const Item = (props) => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className={`item ${isOpen ? 'open': ''}`} onClick={() => {
        setOpen(current => !current)
    }}>
    <p className='number'>{props.i <= 9 ? `0${props.i}`: `${props.i}`}</p>
    <p className='title'>{props.faq.title}</p>

    </div>
  )
}

export default Item
