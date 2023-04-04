import React from "react";

function Curriculo(){
  const secoes = [
    {
      titulo:"Resumo",
      paragrafo1:"Formado em Eletrônica pelo IFAL e em nutrição pela UNIT, decido largar a nutrição e voltar a estudar tecnologia. Em transição de carreira que está estudando para ser um Front End Developer."        
    },
    {
      titulo:"Acadêmico",
      paragrafo1:"(2009 - 2012) - Técnico em Eletrônica no IFAL.", 
      paragrafo2:"(2015 - 2019) - Bacharel em Nutrição na UNIT."
    },
    {
      titulo:"Profissional",
      paragrafo1:"(2012 - Atual) - Técnico em Sistemas Audiovisuais na TV GAZETA.", 
      paragrafo2:"(2023 - Atual) - Desenvolvedor Front End no Comeia."
    }

  ]
  return(
    <>
    {secoes.map((secao) =>
    <section>
      <h2>{secao.titulo}</h2>
      <p>{secao.paragrafo1}</p>
      <p>{secao.paragrafo2}</p>
    </section>)}
    </>
  )
}

export default Curriculo