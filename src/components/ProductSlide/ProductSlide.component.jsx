import React from 'react';

import styles from './ProductSlide.module.css';

// Components
import Product from './Product/Product.component';

function ProductSlide({name, products}) {

  function handleWheel(event) {
    if(event.deltaY > 0) {
      console.log(event.target);
      event.target.scrollBy(300, 0);
    } else if (event.deltaY < 0) {
      event.target.scrollBy(-300, 0);
    }
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.slide} onWheel={handleWheel}>
        {
          products && products.map((product) => {
            return <Product key={product.id} id={product.id} image_url={product.image_url} />
          })
        }
      </div>
    </section>
  );
}

export default ProductSlide;