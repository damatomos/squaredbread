import React from 'react';

import styles from './Menu.module.css';

import { useNavigate } from 'react-router-dom';

// Components
import Nav from "./../Nav/Nav.component";
import BtnLogin from "./../BtnLogin/BtnLogin.component";

// Images
import Logo from '../../../assets/favicon.svg?component';
import Cart from '../Cart/Cart.component';

function Menu() {

  const navigate = useNavigate();

  function handleLogo() {
    navigate('/');
  }

  return (
    <div className={`container ${styles.wrapper}`}>
      <span onClick={handleLogo} className={styles.logo}>
        <Logo/>
      </span>
      <Nav/>
      <div className={styles.account}>
        <BtnLogin/>
        <Cart/>
      </div>
    </div>
  );
}

export default Menu;