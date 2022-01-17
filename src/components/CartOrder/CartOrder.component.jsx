import React from 'react';

import styles from './CartOrder.module.css';

import formatter from 'currency-formatter';
import { useNavigate } from 'react-router-dom';

// Contexts
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';

import Button from './../Form/Button/Button.component';
import { Link } from 'react-router-dom';

function CartOrder({setSuccess}) {
  
  const cartContext = React.useContext(CartContext);
  const { logged, user } = React.useContext(UserContext);

  const navigate = useNavigate();

  const [total, setTotal] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(null);

  async function updateOrder() {
    let cart = await cartContext.getCart();
    let products = cart.products;
    setTotal(await cartContext.getTotal(products));
    setCount(await cartContext.getCount());
  }

  async function handleConfirm() {
    if ( logged ) {
      if (count > 0 && total > 0) {
        try {
          let clean = await cartContext.clearAll();
          if (clean) await updateOrder();
          setSuccess(`${user.name.split(' ')[0]} Seu pedido saiu para entrega!`);
        } catch (err) {
          console.log(err);
        }
      } else {
        setError('Adicione algum item no carrinho.');
      }
    } else {
      navigate('/login');
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
      {
        error && <span className={styles.error}>{error}</span>
      }
    </div>
  );
}

export default CartOrder;