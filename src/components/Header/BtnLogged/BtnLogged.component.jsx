import React from 'react';

import styles from './BtnLogged.module.css';

// Images
import UserSVG from './../../../assets/user.svg?component';
import { UserContext } from '../../../contexts/UserContext';

function BtnLogged() {

  const { getUser, logout } = React.useContext(UserContext);

  const infoRef = React.useRef();
  const btnRef = React.useRef();

  const [user, setUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleLogout() {
    logout();
  }

  window.addEventListener('click', (e) => {
    if ( 
      open && e.target != infoRef.current && 
      e.target != btnRef.current
      ) {
      setOpen(false);
    }
  }); 

  window.addEventListener('scroll', () => {
    setOpen(false);
  });

  React.useEffect(() => {
    if (!user && getUser()) setUser(getUser());
  });

  return (
    <span className={styles.wrapper}>
      <span ref={btnRef} className={styles.btn} onClick={handleClick}>
        <UserSVG/> 
      </span>
      {
        open && <div ref={infoRef} className={styles.info} >
          <span className={styles.infoName}>
            {user && user.name}
          </span>
          <span className={styles.infoEmail}>
            {user && user.email}
          </span>
          <span className={styles.infoEmail}>
            {user && user.phoneNumber.slice(3, user.phoneNumber.length)}
          </span>
          <button className={styles.btnLogout} onClick={handleLogout}>Sair</button>
        </div>
      }
    </span>
  );
}

export default BtnLogged;