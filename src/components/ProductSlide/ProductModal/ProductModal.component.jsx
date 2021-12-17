import React from 'react';

import styles from './ProductModal.module.css';

import formatter from 'currency-formatter';

import contents from './../../../assets/contents.json';

import { useNavigate } from 'react-router-dom';

// Components
import Counter from './../../Counter/Counter.component';

// Contexts
import { CartContext } from '../../../contexts/CartContext';

function ProductModal({productId, setViewModal}) {

  const [product, setProduct] = React.useState({image_url: '', name: '' });
  const [countProduct, setCountProduct] = React.useState(1);

  const navigate = useNavigate();

  const cartContext = React.useContext(CartContext);
  
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setViewModal(null);
  }

  function addProduct() {
    try {
      cartContext.addProduct(product, countProduct);
      setViewModal(null);
      window.scrollTo(0, 0);
      navigate('/cart');
    } catch(err) {
      console.log("Erro ao salvar o produto");
    }
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
            <Counter setCounter={setCountProduct}>{countProduct}</Counter>
            <button className={styles.btnAdd} onClick={addProduct}>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;