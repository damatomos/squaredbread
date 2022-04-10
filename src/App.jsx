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
import Login from './pages/Login/Login.page';
import Admin from './pages/Admin/Admin.page';

// Contexts
import { CartStorage } from './contexts/CartContext';
import Register from './pages/Register/Register.page';
import Cart from './pages/Cart/Cart.page';
import { UserStorage } from './contexts/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <CartStorage>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<About/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
          <Footer/>
        </CartStorage>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
