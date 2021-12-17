import React from "react";

import styles from './BtnLogin.module.css';

import { useNavigate } from 'react-router-dom';

function BtnLogin() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }
 
  return (
    <button className={styles.wrapper} onClick={handleClick}>
      Login
    </button>
  );
}

export default BtnLogin;