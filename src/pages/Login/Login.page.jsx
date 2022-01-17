import React from 'react';

import styles from './Login.module.css';

import { useNavigate } from 'react-router-dom';

// Components
import Input from '../../components/Form/Input/Input.component';
import Button from '../../components/Form/Button/Button.component';

import { UserContext } from '../../contexts/UserContext';

function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const userContext = React.useContext(UserContext);

  const navigate = useNavigate();

  function handleRegister() {
    navigate('/register');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (userContext) {
      const result = await userContext.login(email, password);
      console.log(result);
      if (result) navigate('/');
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.title}>Bem-Vindo</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="email" addClass={styles.input} value={email} setValue={setEmail} >E-mail</Input>
          <Input type="password" addClass={styles.input} value={password} setValue={setPassword} >Senha</Input>
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