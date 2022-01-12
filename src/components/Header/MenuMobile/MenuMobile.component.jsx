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
import { UserContext } from '../../../contexts/UserContext';
import BtnLogged from '../BtnLogged/BtnLogged.component';

function MenuMobile() {
  const [navActive, setNavActive] = React.useState(false);
  const location = useLocation();

  const { logged, logout } = React.useContext(UserContext);

  React.useEffect( () => {
    setNavActive(false);
  }, [location.pathname]);

  function handleLogout() {
    console.log('logout');
    const result = logout();
    console.log(result);
  }

  return (
    <div className={`container ${styles.wrapper} ${navActive ? styles.newScale : ''}`}>
      <span className={styles.toogle}>
        <Logo/>
        <Toggle navActive={navActive} setNavActive={setNavActive}/>
      </span>
      
      <div className={`${styles.content} ${navActive ? styles.hidden : ''}`}>
        <Nav/>
        <div className={styles.account}>
          {
            logged ? <button className={styles.btnLogout} onClick={handleLogout}>Sair</button> : <BtnLogin/>
          }
          <CartMobile/>
          
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;