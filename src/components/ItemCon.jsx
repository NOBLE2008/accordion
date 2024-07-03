import React from 'react'
import Item from './Item'

const ItemCon = ({faq, setFaqs}) => {
  return (
    <div className="accordion">
      {faq.map(item => <Item faq={item}/>)}
    </div>
  )
}

export default ItemCon
