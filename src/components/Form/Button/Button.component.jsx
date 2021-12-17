import React from 'react';

import styles from './Button.module.css';

function Button({children, addClass, ...props}) {
  return (
    <button {...props} className={`${styles.wrapper} ${addClass}`}>{children}</button>
  );
}

export default Button;