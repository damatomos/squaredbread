import React from 'react';

import styles from './Toggle.module.css';

function Toggle({navActive, setNavActive}) {

  function handleClick() {
    setNavActive((navActive) => !navActive);
  }

  return (
    <span className={`${styles.wrapper} ${navActive ? styles.active : ''}`} onClick={handleClick}>
      <span className={styles.node}></span>
      <span className={styles.node}></span>
      <span className={styles.node}></span>
    </span>
  );
}

export default Toggle;