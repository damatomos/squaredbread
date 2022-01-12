import React from 'react';

import styles from './BtnLogged.module.css';

// Images
import UserSVG from './../../../assets/user.svg?component';
import { UserContext } from '../../../contexts/UserContext';

function BtnLogged() {

  const { getUser, logout } = React.useContext(UserContext);

  const [user, setUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen((open) => !open);
  }

  function handleLogout() {
    console.log('logout');
    const result = logout();
    console.log(result);
  }

  React.useEffect(() => {
    if (!user && getUser()) setUser(getUser());
  });

  return (
    <span className={styles.wrapper}>
      <span className={styles.btn} onClick={handleClick}>
        <UserSVG/> 
      </span>
      {
        open && <div className={styles.info} >
          <span className={styles.infoName}>
            {user && user.name}
          </span>
          <span className={styles.infoEmail}>
            {user && user.email}
          </span>
          <button className={styles.btnLogout} onClick={handleLogout}>Sair</button>
        </div>
      }
    </span>
  );
}

export default BtnLogged;