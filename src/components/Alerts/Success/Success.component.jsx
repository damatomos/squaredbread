import React from "react";

import styles from './Success.module.css';

// Images
import DeleteSVG from './../../../assets/delete2.svg?component';

function Success({children, setSuccess}) {

  function handleClose() {
    setSuccess(null);
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.paragraph}>{children}</p>
      <span className={styles.close} onClick={handleClose}>
        <DeleteSVG/>
      </span>
    </div>
  );
}

export default Success;