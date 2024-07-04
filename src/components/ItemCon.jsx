import React, { useState } from 'react'
import Item from './Item'

const ItemCon = ({faq, setFaqs}) => {
  const [curOpen, setOpen] = useState(null)
  return (
    <div className="accordion">
      {faq.map((item, i) => <Item faq={item} setFaqs={setFaqs} i={i} curOpen={curOpen} onOpen={setOpen}/>)}
    </div>
  )
}

export default ItemCon
