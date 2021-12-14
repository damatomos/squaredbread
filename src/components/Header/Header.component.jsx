import React from "react";

import styles from './Header.module.css';
import Nav from "./Nav/Nav.component";

// Images
import Logo from '../../assets/favicon.svg?component';
import BtnLogin from "./BtnLogin/BtnLogin.component";

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={`container ${styles.content}`}>
        <Logo/>
        <Nav/>
        <BtnLogin/>
      </div>
    </header>
  );
}

export default Header;