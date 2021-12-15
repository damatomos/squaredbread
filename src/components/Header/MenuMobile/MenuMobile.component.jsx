import React from 'react';

import styles from './MenuMobile.module.css';

// Components
import Nav from "../Nav/Nav.component";
import BtnLogin from "../BtnLogin/BtnLogin.component";
import Toggle from "../Toggle/Toggle.component";

// Images
import Logo from '../../../assets/favicon.svg?component';

function MenuMobile() {
  const [navActive, setNavActive] = React.useState(false);

  return (
    <div className={`container ${styles.wrapper} ${navActive ? styles.newScale : ''}`}>
      <span className={styles.toogle}>
        <Logo/>
        <Toggle navActive={navActive} setNavActive={setNavActive}/>
      </span>
      
      <div className={`${styles.content} ${navActive ? styles.hidden : ''}`}>
        <Nav/>
        <BtnLogin/>
      </div>
    </div>
  );
}

export default MenuMobile;