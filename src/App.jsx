import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

// Pages
import Home from './pages/Home/Home.page';
import About from './pages/About/About.page';
import Menu from './pages/Menu/Menu.page';
import Contact from './pages/Contact/Contact.page';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App