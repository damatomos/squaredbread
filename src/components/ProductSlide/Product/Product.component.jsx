import React from 'react';

import styles from './Product.module.css';

function Product({id, image_url, setViewModal, ...props}) {

  function handleClick() {
    setViewModal(id);
  }

  return (
    <div {...props} className={styles.wrapper} onClick={handleClick}>
      <img className={styles.image} src={image_url} />
    </div>
  );
}

export default Product;