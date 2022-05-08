import React from 'react';
import Aside from '../../components/Admin/Aside/Aside.component';
import DataTable from '../../components/Admin/DataTable/DataTable.component';
import Header from '../../components/Admin/Header/Header.component';
import Modal from '../../components/Admin/Modal/Modal.component';

import axios from 'axios';

import styles from './Admin.module.css';

// Components

function Admin() {

  const [viewModal, setViewModal] = React.useState(false);
  const [stockItems, setStockItems] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(async () => {
    const response = await axios.get('http://localhost:4040/stock');
    console.log(response.data);
    setStockItems(response.data);
  }, [refresh]);

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
        <Aside/>
        <DataTable setRefresh={setRefresh} stockItems={stockItems} setViewModal={setViewModal} />
      </div>
      
      <Modal setRefresh={setRefresh} setViewModal={setViewModal} viewModal={viewModal} />
    </div>
  );
}

export default Admin;