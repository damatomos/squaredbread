import React from 'react';

import styles from './Counter.module.css';

function Counter({children, addClass, setCounter}) {

  function addCount() {
    if ( setCounter ) {
      setCounter((counter) => {
        if (counter < 1000) {
          return counter + 1;
        }
        return counter;
      });
    }
  }

  function removeCount() {
    if ( setCounter ) {
      setCounter((counter) => {
        if (counter > 1) {
          return counter - 1;
        }
        return counter;
      });
    }
  }

  return (
    <span className={`${styles.wrapper} ${addClass}`}>
      <button className={styles.minus} onClick={removeCount}>-</button>
        {children}
      <button className={styles.plus} onClick={addCount}>+</button>
    </span>
  );
}

export default Counter;