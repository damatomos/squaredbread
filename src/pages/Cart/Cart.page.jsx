import React from 'react';

import styles from './Cart.module.css';

// Contexts
import { CartContext } from './../../contexts/CartContext';
import CartProduct from '../../components/CartProduct/CartProduct.component';
import CartOrder from '../../components/CartOrder/CartOrder.component';
import Success from '../../components/Alerts/Success/Success.component';

function Cart() {

  const cartContext = React.useContext(CartContext);

  const [success, setSuccess] = React.useState(null);

  const [products, setProducts] = React.useState([]);

  React.useEffect( async () => {
    const cart = await cartContext.getCart();
    if ( cart && cart.products ) {
      setProducts(cart.products.reverse());
    }
  }, [cartContext.count]);

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>

        <div className={styles.cartContainer}>
          {
            products.length > 0 ? products.map((item) => {
              return (
                <CartProduct key={item.product.carId} item={item} />
              );
            }) :
            <p className={styles.message}>Nenhum produto no carrinho!</p>
          }
        </div>
        <div className={styles.sendContainer}>
          <CartOrder setSuccess={setSuccess}/>
        </div>
        {
          success && <Success setSuccess={setSuccess}>{success}</Success>
        }
      </div>
    </section>
  );
}

export default Cart;