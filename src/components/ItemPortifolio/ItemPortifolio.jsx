import React from 'react'
import './ItemPortifolio.css'




const ItemPortifolio = (props)=>{
  return (
    <div key={props.titulo} className="imgPortifolio">
    <a
      href={props.link}
      target="_blank">
        <img src={props.image} alt={props.title}/>
    </a>
    <p>{props.title}</p>
  </div>
  )
}

export default ItemPortifolio;