import React from 'react';

import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';

// Images
import CartSVG from './../../../assets/cart_fill.svg?component';

function Cart() {

  const [counter, setCounter] = React.useState(0);

  const navigate = useNavigate();

  function handleClick() {
    navigate('/cart');
  }

  React.useEffect(() => {

    const cart = window.localStorage.getItem('cart');
    if (cart) {
      setCounter(cart.length);
    }
  }, []);

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <span className={styles.counter}>{counter}</span>
      <CartSVG/>
    </div>
  );
}

export default Cart;