import React from 'react';

import styles from './Product.module.css';

// Images
import CartSVG from './../../../assets/cart_line.svg?component';

function Product({id, image_url, setViewModal, ...props}) {

  function handleClick() {
    setViewModal(id);
  }

  return (
    <div {...props} className={styles.wrapper} onClick={handleClick}>
      <img className={styles.image} src={image_url} />
      <span className={styles.over}>
        <CartSVG/>
      </span>
    </div>
  );
}

export default Product;