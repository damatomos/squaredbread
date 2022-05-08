import React from "react";

import styles from './Aside.module.css';

// Images
import LogoSVG from '../../../assets/logo.svg?component';


// Components
import Category from "./Category/Category.component";

export default function Aside() {

  const [listCategories, setListCategories] = React.useState([]);
  const [category, setCategory] = React.useState('');

  function handleAddCategory() {
    setListCategories( (categories) => [...categories, { name: category }]);
    setCategory('');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoSVG/>
      </div>
      
      <hr className={styles.divider}/>

      <div className={styles.addCategoria}>
        <input type="text" placeholder="Nova Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />
        <button onClick={handleAddCategory}>
          +
        </button>
      </div>

      <div className={styles.categories}>
        {
          listCategories.map(({name}) => {
            return <Category key={name} name={name}/>
          })
        }
      </div>

      <footer className={styles.footer}>
        Padaria² - Todos os direitos reservados - 2021
      </footer>
    </div>
  );
}