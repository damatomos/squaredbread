import React from 'react';

import styles from './Newsletter.module.css';

// Components
import Input from '../Form/Input/Input.component';
import Button from './Button/Button.component';

function Newsletter() {

  function handleClick(event) {
    event.preventDefault();
    // send mail
  }

  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.title}>Adicione seu e-mail para receber mais novidades!</h3>
        <form action="" className={styles.form}>
          <Input type="text" addClass={styles.input} placeholder="Nome Completo"/>
          <Input type="email" addClass={styles.input} placeholder="Seu Melhor Email"/>
          <Button type="submit" onClick={handleClick}/>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;