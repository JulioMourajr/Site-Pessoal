import React from "react";
import casimiroflix from '../../assets/casimiroflix.jpg';
import gitHub from '../../assets/gitHub.jpg';
import java from '../../assets/javaPOO.png';
import spring from '../../assets/spring.png';
import './Portifolio.css'
function Portifolio(){

  const portifolios = [
    {
      link:"https://github.com/JulioMourajr/Casimiroflix",
      imagem: casimiroflix,
      titulo:"Casimiroflix"
    },
    {
      link:"https://github.com/JulioMourajr/cracha-nlw",
      imagem: gitHub,
      titulo:"Crachá Digital"
    },
    {
      link:"https://github.com/JulioMourajr/java-springboot-learning",
      imagem:java,
      titulo:"Java"
    },
    {
      link:"https://github.com/JulioMourajr/Spring-Boot-Api",
      imagem:spring,
      titulo:'Spring'
    }
  ];

  return(
    <section className="section-grid">
   
    {portifolios.map((portifolio) => <div className="imgPortifolio">
        <a
          href={portifolio.link}
          target="_blank">
            <img src={portifolio.imagem} alt=""/>
        </a>
        <p>{portifolio.titulo}</p>
      </div>)}
    </section>   
    ) 
}

export default Portifolio;