import React from "react";

import styles from './RowData.module.css';

// Images
import EditSVG from '../../../../assets/edit.svg?component';
import RemoveSVG from '../../../../assets/remove.svg?component';

export default function RowData() {
  return (
    <tr className={styles.wrapper}>
      <td>01</td>
      <td>Pastel</td>
      <td>20</td>
      <td>Comidas</td>
      <td>02/05/2022</td>
      <td width="40" className={styles.tdButton}>
        <button className={styles.button}>
          <EditSVG/>
        </button>
      </td>
      <td width="40" className={styles.tdButton}>
        <button className={styles.button}>
          <RemoveSVG/>
        </button>
      </td>
    </tr>
  );
}