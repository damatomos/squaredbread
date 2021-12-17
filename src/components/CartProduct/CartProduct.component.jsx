import React from 'react';

import styles from './CartProduct.module.css';

import formatter from 'currency-formatter';

// Components
import Counter from './../Counter/Counter.component';
import { CartContext } from '../../contexts/CartContext';

// Images
import DeleteSVG from './../../assets/delete.svg?component';

function CartProduct({item, ...props}) {
  
  const {product, count} = item;

  const [counter, setCounter] = React.useState(0);

  const cartContext = React.useContext(CartContext);

  async function handleDelete() {
    // delete item
    await cartContext.removeProduct(product.carId);
  }

  React.useEffect(async () => {
    if (counter != count) {
      item.count = counter;
      await cartContext.updateCountProduct(item);
    }
  }, [counter]);

  React.useEffect(() => {
    setCounter(Number(count));
  }, []);
  
  return (
    <div className={styles.wrapper} {...props}>
      <span className={styles.content}>
        <span 
          style={{backgroundImage: `url(${product.image_url})`}} 
          className={styles.image}></span>
        <span className={styles.info}>
          <h4>{product.name.substr(0, 20)}{product.name.length > 20 ? '...' : ''}</h4>
          <p>{product.description.substr(0, 20)}{product.description.length > 20 ? '...' : ''}</p>
        </span>
      </span>
      <span className={styles.values}>
        <Counter addClass={styles.counter} setCounter={setCounter}>{counter}</Counter>
        <p className={styles.price}>{formatter.format(product.price * counter, { currency: 'pt-br', code: 'BRL'})}</p>
      </span>
      <span className={styles.delete} onClick={handleDelete}>
        <DeleteSVG/>
      </span>
    </div>
  );
}

export default CartProduct;