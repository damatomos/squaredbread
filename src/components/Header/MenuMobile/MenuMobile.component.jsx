import React from 'react';

import styles from './MenuMobile.module.css';

import { useLocation } from 'react-router-dom';

// Components
import Nav from "../Nav/Nav.component";
import BtnLogin from "../BtnLogin/BtnLogin.component";
import Toggle from "../Toggle/Toggle.component";

// Images
import Logo from '../../../assets/favicon.svg?component';
import CartMobile from '../CartMobile/CartMobile.component';

function MenuMobile() {
  const [navActive, setNavActive] = React.useState(false);
  const location = useLocation();

  React.useEffect( () => {
    setNavActive(false);
  }, [location.pathname]);

  return (
    <div className={`container ${styles.wrapper} ${navActive ? styles.newScale : ''}`}>
      <span className={styles.toogle}>
        <Logo/>
        <Toggle navActive={navActive} setNavActive={setNavActive}/>
      </span>
      
      <div className={`${styles.content} ${navActive ? styles.hidden : ''}`}>
        <Nav/>
        <div className={styles.account}>
          <BtnLogin/>
          <CartMobile/>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;