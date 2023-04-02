import React from "react";

function Contato(){
  return(
    <section className="formulario">
      <form>
          <label for="fname">Nome</label><br/><br/>
          <input  type="text" id="fname" name="fname"/><br/><br/>
          <label for="email">Email</label><br/><br/>
          <input type="email" id="email" name="email" placeholder="nome@email.com"/><br/><br/>
        
          <label for="fname">Mensagem<br/></label><br/>
          <textarea placeholder="Deixe Aqui sua mensagem." name="Mensagem" rows="10" cols="30"></textarea><br/><br/>
          <input id="botao" type="submit" value="Enviar"/>
        </form>
    </section>
                       
  )
}

export default Contato;