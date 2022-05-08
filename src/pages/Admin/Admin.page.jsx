import React from 'react';
import Aside from '../../components/Admin/Aside/Aside.component';
import DataTable from '../../components/Admin/DataTable/DataTable.component';
import Header from '../../components/Admin/Header/Header.component';

import styles from './Admin.module.css';

// Components

function Admin() {

  const [openModal, setOpenModal] = React.useState(true);

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
        <Aside/>
        <DataTable/>
      </div>

      {
        openModal && (
          <div className={styles.modal} onClick={() => {setOpenModal(false)}}>
            MODAL
          </div>
        )
      }
    </div>
  );
}

export default Admin;