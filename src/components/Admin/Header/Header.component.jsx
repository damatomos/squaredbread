import React from "react";

import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <h2>Squared Bread</h2>
      <a href="/">sair</a>
    </div>
  );
}