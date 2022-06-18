import React from "react";

import styles from './Header.module.css';

export default function Header() {

  function exitAdmin()
  {
    localStorage.removeItem('admin');
    window.location.reload();
  }

  return (
    <div className={styles.wrapper}>
      <h2>Squared Bread</h2>
      <a onClick={exitAdmin}>sair</a>
    </div>
  );
}