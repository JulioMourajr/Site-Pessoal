import React from "react";

function Portifolio(){
  return(
    <main>
      <section className="section-grid">
      <div className="imgPortifolio">
        <a
          href="https://github.com/JulioMourajr/Casimiroflix"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="./imgs/casimiroflix.JPG" alt=""
        /></a>
        <p>Casimiroflix</p>
      </div>
      <div className="imgPortifolio">
        <a
          href="https://github.com/JulioMourajr/cracha-nlw"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="./imgs/gitHub.JPG" alt=""
        /></a>
        <p>Crachá Digital</p>
      </div>
      <div className="imgPortifolio">
        <a
          href="https://github.com/JulioMourajr/java-springboot-learning"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="./imgs/javaPOO.png" alt=""
        /></a>
        <p>POO Java</p>
      </div>
      <div className="imgPortifolio">
        <a
          href="https://github.com/JulioMourajr/Spring-Boot-Api"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="./imgs/spring.png" alt=""
        /></a>
        <p>API - Spring</p>
      </div>
    </section>
    </main>
  )
}

export default Portifolio;