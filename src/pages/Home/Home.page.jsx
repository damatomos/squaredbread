import React from "react";
import Banner from "../../components/Banner/Banner.component";
import styles from './Home.module.css';

import contents from '../../assets/contents.json';
import ProductSlide from "../../components/ProductSlide/ProductSlide.component";
import ProductModal from "../../components/ProductSlide/ProductModal/ProductModal.component";
import Newsletter from "../../components/Newsletter/Newsletter.component";
import axios from "axios";

function Home() {
  const [viewModal, setViewModal] = React.useState(null);
  const [products, setProducts] = React.useState([]);

  React.useEffect(async () => {
    let responseProducts = await axios('http://localhost:4040/products?limit=4');
    setProducts(responseProducts.data);
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className={`page ${styles.wrapper}`}>
      <Banner/>
      <div className={`container ${styles.content}`}>
        <ProductSlide setViewModal={setViewModal} name="Destaques do dia" products={products}/>
      </div>
      <Newsletter/>
      {
        viewModal && <ProductModal setViewModal={setViewModal}  productId={viewModal}/>
      }
    </div>
  );
}

export default Home;