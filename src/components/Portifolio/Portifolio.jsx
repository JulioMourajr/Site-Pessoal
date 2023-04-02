import React from "react";
import casimiroflix from '../../assets/casimiroflix.jpg';
import gitHub from '../../assets/gitHub.jpg';
import java from '../../assets/javaPOO.png';
import spring from '../../assets/spring.png';

function Portifolio(){
  return(
    <main>
      <section className="section-grid">
      <div className="imgPortifolio">
        <a
          href="https://github.com/JulioMourajr/Casimiroflix"
          target="_blank"
          rel="noopener noreferrer"
          ><img src={casimiroflix} alt=""
        /></a>
        <p>Casimiroflix</p>
      </div>
      <div className="imgPortifolio">
        <a
          href="https://github.com/JulioMourajr/cracha-nlw"
          target="_blank"
          rel="noopener noreferrer"
          ><img src={gitHub} alt=""
        /></a>
        <p>Crachá Digital</p>
      </div>
      <div className="imgPortifolio">
        <a
          href="https://github.com/JulioMourajr/java-springboot-learning"
          target="_blank"
          rel="noopener noreferrer"
          ><img src={java} alt=""
        /></a>
        <p>POO Java</p>
      </div>
      <div className="imgPortifolio">
        <a
          href="https://github.com/JulioMourajr/Spring-Boot-Api"
          target="_blank"
          rel="noopener noreferrer"
          ><img src={spring} alt=""
        /></a>
        <p>API - Spring</p>
      </div>
    </section>
    </main>
  )
}

export default Portifolio;