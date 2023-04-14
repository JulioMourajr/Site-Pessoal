import React from 'react'
import './ItemPortifolio.css'




const ItemPortifolio = (props)=>{
  return (
    <div key={props.titulo} className="imgPortifolio">
    <a
      href={props.link}
      target="_blank">
        <img src={props.imagem} alt=""/>
    </a>
    <p>{props.titulo}</p>
  </div>
  )
}

export default ItemPortifolio;