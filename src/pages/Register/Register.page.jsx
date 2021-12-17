import React from 'react';

import styles from './Register.module.css';

import { useNavigate } from 'react-router-dom';

// Components
import Input from '../../components/Form/Input/Input.component';
import Button from '../../components/Form/Button/Button.component';

function Register() {

  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login');
  }

  function handleSubmit(event) {
    event.preventDefault();
    // verify login and redirect to home
  }

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.title}>Registre-se</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="text" addClass={styles.input}>Nome</Input>
          <Input type="email" addClass={styles.input}>E-mail</Input>
          <Input type="password" addClass={styles.input}>Senha</Input>
          <Input type="password" addClass={styles.input}>Confirmar Senha</Input>
          <Button type="submit" addClass={styles.btn} >Criar conta</Button>
          <p className={styles.tologin}>
            Já tem uma conta? <span onClick={handleLogin}>Faça seu LogIn</span>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;