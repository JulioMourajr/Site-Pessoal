import React from "react";
import './Contato.css'

function Contato(){
  return(
    <section className="formulario">
      <form>
          <label htmlFor="fname">Nome</label><br/><br/>
          <input  type="text" id="fname" name="fname" placeholder="Nome"/><br/><br/>
          <label htmlFor="email">Email</label><br/><br/>
          <input type="email" id="email" name="email" placeholder="nome@email.com"/><br/><br/>
        
          <label htmlFor="msg">Mensagem<br/></label><br/>
          <textarea placeholder="Deixe Aqui sua mensagem."  id="msg" name="Mensagem" rows="10" cols="30"></textarea><br/><br/>
          <input id="botao" type="submit" value="Enviar"/>
        </form>
    </section>                      
  )
}

export default Contato;