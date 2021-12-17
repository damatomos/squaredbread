import React from 'react';

import styles from './Cart.module.css';

// Contexts
import { CartContext } from './../../contexts/CartContext';
import CartProduct from '../../components/CartProduct/CartProduct.component';

function Cart() {

  const cartContext = React.useContext(CartContext);

  const [products, setProducts] = React.useState([]);

  React.useEffect( async () => {
    const cart = await cartContext.getCart();
    if ( cart && cart.products ) {
      setProducts(cart.products);
    }
  }, [cartContext.count]);

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>

        <div className={styles.cartContainer}>
          {
            products.length > 0 ? products.map((item, index) => {
              return (
                <CartProduct key={index} item={item} />
              );
            }) :
            <p className={styles.message}>Nenhum produto no carrinho!</p>
          }
        </div>
        <div className={styles.sendContainer}>
          <h1>SEND</h1>
        </div>

      </div>
    </section>
  );
}

export default Cart;