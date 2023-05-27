import React, {useState} from "react";
import './Contato.css'

function Contato(){

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(event){
    event.preventDefault();
     console.log("O formulario foi enviado!");

     const texto = `O cliente: ${nome}\n que tem o Email: ${email}\n com o número de Celular: ${telefone}\n quer 
  te mandar a seguinte Mensagem: ${mensagem}`

    const numeroWhats = import.meta.env.VITE_WHATSAPP_NUMBER; // numero do whats que a mensagem vai.

    const linkWhats = `https://api.whatsapp.com/send/?phone=${numeroWhats}&text=${encodeURIComponent(texto)}`;

    window.open(linkWhats, '_blank');
  }

  function mascaraTelefone(event){
    const texto = event.target.value
    const apenasNumeros = texto.replace(/\D/g, '').substring(0, 11)
  
    let celularFormatado = apenasNumeros.replace(
      /^(\d{2})(\d{5})(\d{4})/,
      '($1) $2-$3'
    )
  
    if (apenasNumeros.length < 11) {
      celularFormatado = apenasNumeros.replace(
        /^(\d{2})(\d{4})(\d{0,4})/,
        '($1) $2-$3'
      )
    }
  
    setTelefone(celularFormatado)
  }
  return(
    
    <section className="formulario">
      <form onSubmit={enviarFormulario}>
          <label htmlFor="fname">Nome</label><br/><br/>
          <input  type="text" 
          id="fname" 
          name="fname"
           placeholder="Nome" 
           required minLength={2}
           value={nome}
           onChange={(event)=> setNome(event.target.value)}/><br/>
          <label htmlFor="email">Email</label><br/><br/>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="nome@email.com" 
          required
          value={email}
          onChange={(event)=> setEmail(event.target.value)}/><br/><br/>
          <label htmlFor="input-tel">Telefone</label> <br />
        <br />
        <input
          type="tel"
          id="input-tel"
          placeholder="Celular (99) 99999-9999"
          required
          pattern="^\(\d{2}\) \d{5}-\d{4}$"
          maxLength={15}
          value={telefone}
          onChange={mascaraTelefone}
        />
        <br />
        <br />
          <label htmlFor="msg">Mensagem<br/></label><br/>
          <textarea 
          placeholder="Deixe Aqui sua mensagem."  
          id="msg" name="Mensagem" 
          rows="10" 
          cols="30"
          value={mensagem}
          onChange={(event)=>setMensagem(event.target.value)}></textarea><br/><br/>
          <input id="botao" type="submit" value="Enviar"/>
        </form>
    </section>                      
  )
}

export default Contato;