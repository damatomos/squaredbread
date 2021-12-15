import React from 'react';

import styles from './Menu.module.css';

// Components
import Nav from "./../Nav/Nav.component";
import BtnLogin from "./../BtnLogin/BtnLogin.component";

// Images
import Logo from '../../../assets/favicon.svg?component';

function Menu() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <Logo/>
      <Nav/>
      <BtnLogin/>
    </div>
  );
}

export default Menu;