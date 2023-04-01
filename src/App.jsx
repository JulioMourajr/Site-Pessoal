import React from 'react'
import './App.css'
import julioAvatar from './assets/avatar.jpg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Curriculo from './components/Curriculo/Curriculo';
import Portifolio from './components/Portifolio/Portifolio';
import Contato from './components/Contato/Contato';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header></Header>
    

    <BrowserRouter>
    <nav className='menu'>
      <ul>
        <a><li><Link to={"/"}>CURRICULO</Link></li></a>
        <a><li><Link to={"/portifolio"}>PORTIFOLIO</Link></li></a>
        <a><li><Link to={"/contato"}>CONTATO</Link></li></a>
      </ul>
    </nav>
    <Routes>
      <Route index element={<Curriculo></Curriculo>}></Route>
      <Route path="/portifolio" element={<Portifolio></Portifolio>}></Route>
      <Route path="/contato" element={<Contato></Contato>}></Route>
    </Routes>

    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App
