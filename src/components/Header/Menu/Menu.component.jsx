import React from 'react';

import styles from './Menu.module.css';

// Components
import Nav from "./../Nav/Nav.component";
import BtnLogin from "./../BtnLogin/BtnLogin.component";

// Images
import Logo from '../../../assets/favicon.svg?component';
import Cart from '../Cart/Cart.component';

function Menu() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <Logo/>
      <Nav/>
      <div className={styles.account}>
        <BtnLogin/>
        <Cart/>
      </div>
    </div>
  );
}

export default Menu;