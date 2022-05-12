import React from "react";

import styles from './RowData.module.css';

import axios from 'axios';

// Images
import EditSVG from '../../../../assets/edit.svg?component';
import RemoveSVG from '../../../../assets/remove.svg?component';

export default function RowData({id, name, quantity, category, date, setRefresh}) {

  async function handleDeleteStock() {
    await axios.delete(`http://localhost:4040/stock/${id}`);
    setRefresh((refresh) => !refresh);
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
      <td>{ convertDate(date) }</td>
      <td width="40" className={styles.tdButton}>
        <button className={styles.button}>
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