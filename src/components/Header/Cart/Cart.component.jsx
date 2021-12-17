import React from 'react';

import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';

// Images
import CartSVG from './../../../assets/cart_fill.svg?component';
import { CartContext } from '../../../contexts/CartContext';

function Cart() {

  const [counter, setCounter] = React.useState(0);

  const { count } = React.useContext(CartContext);

  const navigate = useNavigate();

  function handleClick() {
    navigate('/cart');
  }

  React.useEffect(() => {
    if (count) {
      setCounter(count);
    }
  }, [count]);

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <span className={styles.counter}>{counter}</span>
      <CartSVG/>
    </div>
  );
}

export default Cart;