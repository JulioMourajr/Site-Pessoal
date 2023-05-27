import React from "react";
import './Portifolio.css'
import ItemPortifolio from "../ItemPortifolio/ItemPortifolio";
function Portifolio({portifolio}){

  return(
    <section className="section-grid">
   
    {portifolio.map(
      (item, index) => 
      <ItemPortifolio key={index}
        link={item.link}
        imagem={item.image}
        titulo={item.title}
      ></ItemPortifolio>
    )}
    </section>   
    ) 
}

export default Portifolio;