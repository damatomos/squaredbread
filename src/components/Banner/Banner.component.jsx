import React from 'react';

import styles from './Banner.module.css';

function Banner() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Do café da manhã até o jantar.</h2>
          <p className={styles.info}>Aberto de 7:00 às 22:00</p>
          <button className={styles.btn}>Cardápio</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;