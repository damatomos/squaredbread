import React from 'react';

import styles from './TextArea.module.css';

function TextArea({id, children, value, setValue, ...props}) {
  return (
    <>
    <label htmlFor={id} className={styles.label}>{children}</label>
    <textarea 
      required
      value = {value}
      onChange={({target}) => setValue(target.value)}
      {...props} 
    className={styles.wrapper} name={id} id={id}/>
    </>
  );
}

export default TextArea;