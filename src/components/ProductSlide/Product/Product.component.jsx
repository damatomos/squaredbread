import React from 'react';

import styles from './Product.module.css';

function Product({id, image_url, ...props}) {
  return (
    <div {...props} className={styles.wrapper}>
      <img className={styles.image} src={image_url} />
    </div>
  );
}

export default Product;