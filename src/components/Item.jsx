import React, { useState } from 'react'

const Item = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className={`item ${isOpen ? 'open': ''}`}>

    </div>
  )
}

export default Item
