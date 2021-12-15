import React from 'react';

import styles from './Title.module.css';

function Title({children}) {
  return (
    <h2 className={styles.wrapper}>{children}</h2>
  );
}

export default Title;