import React from "react";

import styles from './Category.module.css';


import DeleteSVG from '../../../../assets/delete.svg?component';

export default function Category({name, ...props}) {
  return (
    <span className={styles.wrapper} {...props}>
      {name}
      <button className={styles.button}>
        <DeleteSVG/>
      </button>
    </span>
  );
}