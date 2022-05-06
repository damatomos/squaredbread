import React from "react";

import styles from './Aside.module.css';

// Images
import LogoSVG from '../../../assets/logo.svg?component';

export default function Aside() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoSVG/>
      </div>
      
      <hr className={styles.divider}/>

      <div className={styles.addCategoria}>
        <input type="text" placeholder="Nova Categoria" />
        <button>
          +
        </button>
      </div>

      <div className={styles.categories}>
        <span className={styles.category}>
          Categoria 01
          <button>x</button>
        </span>
        <span className={styles.category}>
          Categoria 01
          <button>x</button>
        </span>
        <span className={styles.category}>
          Categoria 01
          <button>x</button>
        </span>
        <span className={styles.category}>
          Categoria 01
          <button>x</button>
        </span>
        <span className={styles.category}>
          Categoria 01
          <button>x</button>
        </span>
        <span className={styles.category}>
          Categoria 01
          <button>x</button>
        </span>
        <span className={styles.category}>
          Categoria 01
          <button>x</button>
        </span>
      </div>

      <footer className={styles.footer}>
        Padaria² - Todos os direitos reservados - 2021
      </footer>
    </div>
  );
}