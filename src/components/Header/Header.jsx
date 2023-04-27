import React from 'react'
import julioAvatar from '../../assets/avatar.jpg';
import './Header.css' 

function Header(props){

  const {nome, cargo, foto} = props.informacoes;
  return(
    <header>
      <div id="cabecalho">
        <img
          id="fotoPerfil"
          src={foto}
          alt="Imagem de perfil de Julio"
        />
        <h1 id="Titulo">{nome}</h1>
        <h3 id="Subtitulo">{cargo}</h3>
      </div>
    </header>
  )
}

export default Header;