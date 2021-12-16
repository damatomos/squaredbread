import React from 'react';

import styles from './ProductModal.module.css';

import formatter from 'currency-formatter';

import contents from './../../../assets/contents.json';

function ProductModal({productId, setViewModal}) {

  const [product, setProduct] = React.useState({image_url: '', name: '' });
  const [countProduct, setCountProduct] = React.useState(0);
  
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setViewModal(null);
  }
  
  function addCount() {
    if ( countProduct < 1000 ) {
      setCountProduct((count) => count + 1);
    }
  }

  function removeCount() {
    if (countProduct > 0) {
      setCountProduct((count) => count - 1);
    }
  }

  function addProduct() {
    console.log(countProduct);
    setViewModal(null);
  }

  React.useEffect(() => {
    const product = contents.menu.products.find( (product) => product.id == productId);
    setProduct(product);
  }, [product]);

  return (
    <div className={styles.wrapper} onClick={handleOutsideClick}>
      <div className={styles.content}>
        <img src={product.image_url} className={styles.image} alt={product.name} />
        <div className={styles.info}>
          <h2 className={styles.title}>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <span className={styles.price}>{formatter.format(product.price, { code: 'BRL'})}</span>
          <div className={styles.btnContainer}>
            <span className={styles.btnCount}>
              <button className={styles.minus} onClick={removeCount}>-</button>
                {countProduct}
              <button className={styles.plus} onClick={addCount}>+</button>
            </span>
            <button className={styles.btnAdd} onClick={addProduct}>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;