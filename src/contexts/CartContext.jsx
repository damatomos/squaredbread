import React from 'react';

export const CartContext = React.createContext();

export const CartStorage = ({children}) => {

  const [count, setCount] = React.useState(0);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    let local = window.localStorage.getItem('cart');
    if (local) {
      setCount(JSON.parse(local).length);
      setProducts(JSON.parse(local).products);
    } else {
      local = { products: [], length: 0 };
      window.localStorage.setItem('cart', JSON.stringify(local));
    }
  }, []);

  async function getCart() {
    return await JSON.parse(window.localStorage.getItem('cart'));
  }

  async function save(cart) {
    window.localStorage.setItem('cart', JSON.stringify(cart));
    let {products, length} = await getCart(cart);
    setCount(length);
    setProducts(products);
  }

  async function clearAll() {
    local = { products: [], length: 0 };
    await save(local);
  }

  function addProduct(product, count) {
    getCart().then( async (cart) => {
      const newCart = { products: [...cart.products, {product, count}], length: cart.products.length + 1 };
      await save(newCart);
    })
  }

  async function removeProduct({product, count}) {
    try {
      let { products } = await getCart();

      if (products) {
        products.map((item, index) => {
          if (item.product.id == product.id && item.count == count) {
            products.splice(index, 1);
          }
        });
        await save({products, length: products.length});
      }
    } catch (err) {
      console.log('Erro ao remover produto: ', err);
    }
  }

  return <CartContext.Provider value={ {clearAll, getCart, count, products, addProduct, removeProduct} }>
    {children}
  </CartContext.Provider>

} 