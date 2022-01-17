import React from 'react';
import axios from 'axios';

import styles from './Menu.module.css';

// Components
import Search from '../../components/Search/Search.component';
import ProductSlide from '../../components/ProductSlide/ProductSlide.component';

// json
import contents from '../../assets/contents.json';
import ProductModal from '../../components/ProductSlide/ProductModal/ProductModal.component';

function Menu() {

  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [search, setSearch] = React.useState(null);

  const [viewModal, setViewModal] = React.useState(null);

  React.useEffect(async () => {
    let responseCategories = await axios('http://localhost:4040/categories');
    setCategories(responseCategories.data);

    let responseProducts = await axios('http://localhost:4040/products');
    setProducts(responseProducts.data);

    window.scrollTo(0, 0);

  }, []);

  React.useEffect(async () => {
    if (search) {
      let responseProducts = await axios(`http://localhost:4040/products?search=${search}`);
      setProducts(responseProducts.data);
    } else if (products.length == 0) {
      let responseProducts = await axios('http://localhost:4040/products');
      setProducts(responseProducts.data);
    }
  }, [search]);

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <Search setSearch={setSearch}/>
        {
          categories.map((category) => {
            let categoryProducts = products.filter((product) => product.category.id == category.id);
            if (categoryProducts.length > 0) {
              return (<ProductSlide key={category.id} setViewModal={setViewModal} name={category.name} products={categoryProducts}/>);
            }
          })
        }
      </div>
      {
        viewModal && <ProductModal setViewModal={setViewModal}  productId={viewModal}/>
      }
    </section>
  );
}

export default Menu;