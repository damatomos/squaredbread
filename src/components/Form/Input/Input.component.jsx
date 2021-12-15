import React from 'react';

import styles from './Input.module.css';

function Input({id, children, value, setValue, ...props}) {

  return (
    <>
      <label className={styles.label} htmlFor={id}>{children}</label>
      <input required value={value} onChange={({target}) => {setValue(target.value)}} className={styles.wrapper} id={id} name={id} {...props} />
    </>
  );
}

export default Input;