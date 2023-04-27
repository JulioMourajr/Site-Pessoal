import React from 'react'

import api from './api';
import './App.css'
import julioAvatar from './assets/avatar.jpg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Curriculo from './components/Curriculo/Curriculo';
import Portifolio from './components/Portifolio/Portifolio';
import Contato from './components/Contato/Contato';
import Navegacao from './components/Navegacao/Navegacao';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portifolio, setPortifolio] = React.useState([]);

  const fecthDados = async () => {
    try{

    const informacao = await api.get('/informacoes/1');
    setInformacoes({
      foto:informacao.data.foto,
      nome:informacao.data.nome,
      cargo:informacao.data.cargo,
    })

    const experienciaAcademica = await api.get('/experiencias?tipo=academico');
    const experienciaProfissional = await api.get('/experiencias?tipo=profissional');

    setCurriculo({
      resumo:informacao.data.resumo,
      experienciaAcademica:experienciaAcademica.data,
      experienciaProfissional:experienciaProfissional.data
    })

    const portifolio = await api.get('/portifolio');
    setPortifolio(portifolio.data);
  }catch(error){
    console.error('Erro ao buscar dados: ', error);
  }
  }

  React.useEffect(() => {
    fecthDados();
  },[])
  return (
    <>
    <Header informacoes={informacoes}></Header>
    

    <BrowserRouter>

    <Navegacao></Navegacao>
    
    <Routes>
      <Route index element={<Curriculo curriculo={curriculo}/>}/>
      <Route path="/portifolio" element={<Portifolio portifolio={portifolio}/>}/>
      <Route path="/contato" element={<Contato/>}/>
    </Routes>

    </BrowserRouter>
    
    <Footer></Footer>
    </>
  )
}

export default App
