import React from 'react';

import styles from './Menu.module.css';

// Components
import Search from '../../components/Search/Search.component';
import ProductSlide from '../../components/ProductSlide/ProductSlide.component';

// json
import contents from '../../assets/contents.json';
import ProductModal from '../../components/ProductSlide/ProductModal/ProductModal.component';

function Menu() {

  const menuContents = contents.menu;
  const bolos = { name: 'Bolos', products: []};
  const lanches = { name: 'Lanches', products: []};
  const paes = { name: 'Pães', products: []};
    
  bolos.products = menuContents.products.filter(product => product.category == 'Bolos' );
  lanches.products = menuContents.products.filter(product => product.category == 'Lanches' );
  paes.products = menuContents.products.filter(product => product.category == 'Pães' );

  const [viewModal, setViewModal] = React.useState(null);

  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <Search/>
        <ProductSlide setViewModal={setViewModal} name={bolos.name} products={bolos.products}/>
        <ProductSlide setViewModal={setViewModal} name={lanches.name} products={lanches.products}/>
        <ProductSlide setViewModal={setViewModal} name={paes.name} products={paes.products}/>
      </div>
      {
        viewModal && <ProductModal setViewModal={setViewModal}  productId={viewModal}/>
      }
    </section>
  );
}

export default Menu;