import React from "react";
import dados from "./Portifolio.json"
import './Portifolio.css'
import ItemPortifolio from "../ItemPortifolio/ItemPortifolio";
function Portifolio(){

  return(
    <section className="section-grid">
   
    {dados.map(
      (portifolio) => 
      <ItemPortifolio key={portifolio.titulo}
        link={portifolio.link}
        imagem={portifolio.imagem}
        titulo={portifolio.titulo}
      ></ItemPortifolio>
    )}
    </section>   
    ) 
}

export default Portifolio;