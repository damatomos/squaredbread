import React from 'react';

import styles from './CartOrder.module.css';

import formatter from 'currency-formatter';

// Contexts
import { CartContext } from '../../contexts/CartContext';

import Button from './../Form/Button/Button.component';
import { Link } from 'react-router-dom';

function CartOrder() {
  
  const cartContext = React.useContext(CartContext);

  const [total, setTotal] = React.useState(0);
  const [count, setCount] = React.useState(0);

  async function updateOrder() {
    let cart = await cartContext.getCart();
    let products = cart.products;
    setTotal(await cartContext.getTotal(products));
    setCount(await cartContext.getCount());
  }

  async function handleConfirm() {
    try {
      let clean = await cartContext.clearAll();
      if (clean) await updateOrder();
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(async () => {
    await updateOrder();
  }, [cartContext.count]);
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Pedido</h2>
      <span className={styles.count}>Produtos: {count}</span>
      <hr className={styles.line}/>
      <span className={styles.price}>Total: <span className={styles.value}>{formatter.format(total, {currency: 'pt-br', code: 'BRL'})}</span></span>
      <span className={styles.btnContainer}>
        <Button addClass={styles.btn} onClick={handleConfirm}>Confirmar Pedido</Button>
        <Link to="/menu" className={styles.tomenu}>Faça mais compras</Link>
      </span>
    </div>
  );
}

export default CartOrder;