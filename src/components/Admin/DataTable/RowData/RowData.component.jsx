import React from "react";

import styles from './RowData.module.css';

import axios from 'axios';

// Images
import EditSVG from '../../../../assets/edit.svg?component';
import RemoveSVG from '../../../../assets/remove.svg?component';

export default function RowData({id, name, quantity, category, date_buy, date_last_buy, setRefresh, setViewModal, setDataStock}) {

  async function handleDeleteStock() {
    await axios.delete(`http://localhost:4040/stock/${id}`);
    setRefresh((refresh) => !refresh);
  }
  
  async function callModalToEdit() {
    const response = await axios.get('http://localhost:4040/stock/' + id);
    if (response) {
      const data = response.data;
      setDataStock(data);
      setViewModal(true);
    }
  }

  function convertDate(date) {
    let dateFormatter = date.split('T')[0].split('-');
    return dateFormatter[2] + '/' + dateFormatter[1] + '/' + dateFormatter[0];
  }

  return (
    <tr className={styles.wrapper}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{category.name}</td>
      <td>{ convertDate(date_buy) }</td>
      <td>{ convertDate(date_last_buy) }</td>
      <td width="40" className={styles.tdButton}>
        <button className={styles.button} onClick={callModalToEdit}>
          <EditSVG/>
        </button>
      </td>
      <td width="40" className={styles.tdButton}>
        <button className={styles.button} onClick={handleDeleteStock}>
          <RemoveSVG/>
        </button>
      </td>
    </tr>
  );
}