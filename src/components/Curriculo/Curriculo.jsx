import React from "react";
import './Curriculo.css'
import dados from "./Curriculo.json";

function Curriculo(){
  return(
    <>
    {dados.map((secao) =>
    <section key={secao.titulo}>
      <h2>{secao.titulo}</h2>
      <p>{secao.paragrafo1}</p>
      <p>{secao.paragrafo2}</p>
    </section>)}
    </>
  )
}

export default Curriculo