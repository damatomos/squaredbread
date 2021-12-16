import React from 'react';

import styles from './CartMobile.module.css';

import { useNavigate } from 'react-router-dom';

// Images
import CartSVG from '../../../assets/cart_line.svg?component';

function CartMobile() {

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
    <button className={styles.wrapper} onClick={handleClick}>
      <span className={styles.counter}>{counter}</span>
      Ver Carrinho <CartSVG/>
    </button>
  );
}

export default CartMobile;