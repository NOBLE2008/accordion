import React from 'react'
import Item from './Item'

const ItemCon = ({faq, setFaqs}) => {
  return (
    <div className="accordion">
      {faq.map((item, i) => <Item faq={item} setFaqs={setFaqs} i={i}/>)}
    </div>
  )
}

export default ItemCon
