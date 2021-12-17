import React from 'react';

import styles from './Login.module.css';

import { useNavigate } from 'react-router-dom';

// Components
import Input from '../../components/Form/Input/Input.component';
import Button from '../../components/Form/Button/Button.component';

function Login() {

  const navigate = useNavigate();

  function handleRegister() {
    navigate('/register');
  }

  function handleSubmit(event) {
    event.preventDefault();
    // verify login and redirect to home
  }

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.title}>Bem-Vindo</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="email" addClass={styles.input}>E-mail</Input>
          <Input type="password" addClass={styles.input}>Senha</Input>
          <Button type="submit" addClass={styles.btn} >Entrar</Button>
          <p className={styles.toregister}>
            Novo aqui? <span onClick={handleRegister}>Registre-se</span>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;