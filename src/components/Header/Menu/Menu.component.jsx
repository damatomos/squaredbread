import React from 'react';

import styles from './Menu.module.css';

import { useNavigate } from 'react-router-dom';

// Components
import Nav from "./../Nav/Nav.component";
import BtnLogin from "./../BtnLogin/BtnLogin.component";
import BtnLogged from "./../BtnLogged/BtnLogged.component";

// Images
import Logo from '../../../assets/favicon.svg?component';
import Cart from '../Cart/Cart.component';
import { UserContext } from '../../../contexts/UserContext';

function Menu() {

  const navigate = useNavigate();

  const { logged } = React.useContext(UserContext);

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
        {
          logged ? <BtnLogged/> : <BtnLogin/>
        }
        <Cart/>
      </div>
    </div>
  );
}

export default Menu;