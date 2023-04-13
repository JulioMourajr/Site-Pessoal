import React from "react";
import { Link } from "react-router-dom";
import './Navegacao.css'

const Navegacao = ()=>{
    return (
        <nav className='menu'>
        <ul>
          <a><li><Link to={"/"}>CURRICULO</Link></li></a>
          <a><li><Link to={"/portifolio"}>PORTIFOLIO</Link></li></a>
          <a><li><Link to={"/contato"}>CONTATO</Link></li></a>
        </ul>
      </nav>
    )
}

export default Navegacao;