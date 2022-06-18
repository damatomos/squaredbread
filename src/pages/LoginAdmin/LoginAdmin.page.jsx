import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Form/Button/Button.component';
import Input from '../../components/Form/Input/Input.component';

import styles from './LoginAdmin.module.css';

import backgroundJPG from '../../assets/background.jpg';

function LoginAdmin()
{

  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState(null);

  const navigate = useNavigate();

  function handleSubmit(event)
  {
    event.preventDefault();

    if ( id == 'admin' && password == 'pass' && localStorage.getItem('admin') != 'logged')
    {
      navigate('/admin-stock');
      localStorage.setItem('admin', 'logged');
    } else {
      setMessage('Dados inválidos');
    }
  }

  React.useEffect(() => {
    if ( localStorage.getItem('admin') == 'logged') navigate('/admin-stock');
  }, []);

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <h3 className={styles.title}>Administrativo</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input type="text" addClass={styles.input} value={id} setValue={setId} >ID</Input>
          <Input type="password" addClass={styles.input} value={password} setValue={setPassword} >Password</Input>
          {
            message && <h5 className={styles.message}>{message}</h5>
          }
          <Button type="submit" addClass={styles.btn} >Entrar</Button>
        </form>
      </div>
    </section>
  );
}

export default LoginAdmin;