import React from 'react';

import styles from './ProductSlide.module.css';

// Components
import Product from './Product/Product.component';

// Images
import LeftArrowSVG from './../../assets/left_arrow.svg?component';
import RightArrowSVG from './../../assets/right_arrow.svg?component';

function ProductSlide({name, products, setViewModal}) {

  const slideRef = React.useRef();

  const [activeArrow, setActiveArrow] = React.useState(true);

  function handleWheel(event) {
    if(event.deltaY > 0) {
      event.target.scrollBy(300, 0);
    } else if (event.deltaY < 0) {
      event.target.scrollBy(-300, 0);
    }
  }

  function moveScroll(arrow) {
    slideRef.current.scrollBy( arrow * 260,0);
  }

  function leftArrow() {
    moveScroll(-1);
  }

  function rightArrow() {
    moveScroll(1);
  }

  React.useEffect(() => {
    if ( products.length < 4) {
      setActiveArrow(false);
    } else {
      setActiveArrow(true);
    }
  }, [slideRef]);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.sliderContainer}>
        <div ref={slideRef} className={styles.slide} onWheel={handleWheel}>
          {
            products && products.map((product) => {
              return <Product setViewModal={setViewModal} key={product.id} id={product.id} image_url={product.image_url} />
            })
          }
        </div>
        {
          activeArrow && 
          (
            <>
              <span onClick={leftArrow} className={`${styles.arrowButton} ${styles.leftButton}`}> <LeftArrowSVG/> </span>
              <span onClick={rightArrow} className={`${styles.arrowButton} ${styles.rightButton}`}> <RightArrowSVG/> </span>
            </>
          )
        }
      </div>
    </section>
  );
}

export default ProductSlide;