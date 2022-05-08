import React from "react";
import axios from 'axios';

import styles from './Category.module.css';


import DeleteSVG from '../../../../assets/delete.svg?component';

export default function Category({id, name, setRefresh, ...props}) {

  async function handleDeleteCategory() {
    await axios.delete(`http://localhost:4040/stock-category/${id}`);
    setRefresh((refresh) => !refresh);
  }

  return (
    <span id={id} className={styles.wrapper} {...props}>
      {name}
      <button className={styles.button} onClick={handleDeleteCategory}>
        <DeleteSVG/>
      </button>
    </span>
  );
}