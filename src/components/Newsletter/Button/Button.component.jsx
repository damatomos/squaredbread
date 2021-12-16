import React from 'react';

import styles from './Button.module.css';

function Button({...props}) {
  return (
    <button className={styles.wrapper} {...props}>
      Receber Novidades
    </button>
  );
}

export default Button;