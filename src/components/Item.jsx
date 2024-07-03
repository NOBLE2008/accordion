import React, { useState } from 'react'

const Item = (props) => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className={`item ${isOpen ? 'open': ''}`} onClick={() => {
        setOpen(current => !current)
    }}>

    </div>
  )
}

export default Item
