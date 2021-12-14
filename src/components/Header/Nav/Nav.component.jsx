import React from "react";

import { NavLink } from "react-router-dom";

import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.wrapper}>
      <NavLink to="/" className={ 
          ({isActive}) => isActive ? styles.active : styles.inactive
        }>Home</NavLink>
      <NavLink to="/about-us" className={ 
          ({isActive}) => isActive ? styles.active : styles.inactive
        }>Quem Somos</NavLink>
      <NavLink to="/menu" className={ 
          ({isActive}) => isActive ? styles.active : styles.inactive
        }>Cardápio</NavLink>
      <NavLink to="/contact" className={ 
          ({isActive}) => isActive ? styles.active : styles.inactive
        }>Contato</NavLink>
    </nav>
  );
}

export default Nav;