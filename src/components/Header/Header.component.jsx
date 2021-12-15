import React from "react";

import styles from './Header.module.css';
import useMedia from "../../hooks/useMedia";
import Menu from "./Menu/Menu.component";
import MenuMobile from "./MenuMobile/MenuMobile.component";

function Header() {
  const mobile = useMedia('(max-width: 768px)');
  
  return (
    <header className={styles.wrapper} >
      { mobile ? <MenuMobile/> : <Menu/> }
    </header>
  );
}

export default Header;