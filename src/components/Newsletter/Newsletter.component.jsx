import React from 'react';

import styles from './Newsletter.module.css';
import axios from 'axios';

// Components
import Input from '../Form/Input/Input.component';
import Button from './Button/Button.component';

function Newsletter() {

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');

  const [message, setMessage] = React.useState('');

  async function handleClick(event) {
    event.preventDefault();

    try {
      if (email && name) {
        const result = await axios.post('http://localhost:4040/newsletter', {
          name,
          email
        });

        if (result) {
          setMessage('Seu cadastro no Newsletter foi efetuado!');
        } else {
          setMessage('É possível que esse email já esteja cadastrado!');
        }
      } else {
          setMessage('Preencha o formulário!');
      }
    } catch(err) {
      setMessage('É possível que esse email já esteja cadastrado!');
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.title}>Adicione seu e-mail para receber mais novidades!</h3>
        <form action="" className={styles.form}>
          <Input type="text" addClass={styles.input} value={name} setValue={setName} placeholder="Nome Completo"/>
          <Input type="email" addClass={styles.input} value={email} setValue={setEmail} placeholder="Seu Melhor Email"/>
          <Button type="submit" onClick={handleClick}/>
        </form>
        {
          message && <h5 className={styles.message}>{message}</h5>
        }
      </div>
    </section>
  );
}

export default Newsletter;