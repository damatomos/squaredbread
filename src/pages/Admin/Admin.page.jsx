import React from 'react';
import Aside from '../../components/Admin/Aside/Aside.component';
import Header from '../../components/Admin/Header/Header.component';

import styles from './Admin.module.css';

// Components

function Admin() {
  return (
    <div className={styles.container}>
      <Header/>
      
      <Aside/>
    </div>
  );
}

export default Admin;