import React from 'react';

import styles from './Register.module.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

// Components
import Input from '../../components/Form/Input/Input.component';
import Button from '../../components/Form/Button/Button.component';
import { UserContext } from '../../contexts/UserContext';

function Register() {

  const navigate = useNavigate();

  const userContext = React.useContext(UserContext);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  function handleLogin() {
    navigate('/login');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // verify login and redirect to home
    const result = await userContext.register(firstName, lastName, email, password, confirmPassword);
    if (result) {
      navigate('/');
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(async () => {
    try {
      if (await userContext.logged) {
        navigate('/');
      }
    } catch (err) {
      console.log('Error to check logged');
    }
  });

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.title}>Registre-se</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="text" addClass={styles.input} value={firstName} setValue={setFirstName}>Nome</Input>
          <Input type="text" addClass={styles.input} value={lastName} setValue={setLastName}>Sobrenome</Input>
          <Input type="email" addClass={styles.input} value={email} setValue={setEmail}>E-mail</Input>
          <Input type="password" addClass={styles.input} value={password} setValue={setPassword}>Senha</Input>
          <Input type="password" addClass={styles.input} value={confirmPassword} setValue={setConfirmPassword}>Confirmar Senha</Input>
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