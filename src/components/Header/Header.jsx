import React from 'react'
import julioAvatar from '../../assets/avatar.jpg';


function Header(){
  return(
    <header>
      <div id="cabecalho">
        <img
          id="fotoPerfil"
          src={julioAvatar}
          alt="Imagem de perfil de Julio"
        />
        <h1 id="Titulo">Julio Moura</h1>
        <h3 id="Subtitulo">Desenvolvedor Front End</h3>
      </div>
    </header>
  )
}

export default Header;