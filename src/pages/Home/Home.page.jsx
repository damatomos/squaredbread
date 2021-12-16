import React from "react";
import Banner from "../../components/Banner/Banner.component";
import styles from './Home.module.css';

import contents from '../../assets/contents.json';
import ProductSlide from "../../components/ProductSlide/ProductSlide.component";
import ProductModal from "../../components/ProductSlide/ProductModal/ProductModal.component";
import Newsletter from "../../components/Newsletter/Newsletter.component";

function Home() {
  const [viewModal, setViewModal] = React.useState(null);
  const products = contents.menu.products.filter((product, index) => {
    if (index % 2 == 0 && index < 8) return product;
  })
  console.log(products);
  return (
    <div className={`page ${styles.wrapper}`}>
      <Banner/>
      <div className={`container ${styles.content}`}>
        <ProductSlide setViewModal={setViewModal} name="Destaques do dia" products={products}/>
        <ProductSlide setViewModal={setViewModal} name="Café da Manhã" products={products}/>
        <ProductSlide setViewModal={setViewModal} name="Lanche da Tarde" products={products}/>
      </div>
      <Newsletter/>
      {
        viewModal && <ProductModal setViewModal={setViewModal}  productId={viewModal}/>
      }
    </div>
  );
}

export default Home;