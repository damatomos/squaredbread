import React from "react";

import styles from './Aside.module.css';

// Images
import LogoSVG from '../../../assets/logo.svg?component';


// Components
import Category from "./Category/Category.component";
import axios from "axios";

export default function Aside() {

  const [listCategories, setListCategories] = React.useState([]);
  const [category, setCategory] = React.useState('');
  const [refesh, setRefresh] = React.useState(false);

  async function handleAddCategory() {
    try {
      await axios.post('http://localhost:4040/stock-category', {
        name: category,
      });

      const categories = await axios.get('http://localhost:4040/stock-category');
      setListCategories(categories.data);
      
    } catch (err) {
      console.log(err);
    }
    setCategory('');
  }

  React.useEffect( async () => {
    const categories = await axios.get('http://localhost:4040/stock-category');
    setListCategories(categories.data);
  }, [refesh]);

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
          listCategories.map(({id, name}) => {
            return <Category setRefresh={setRefresh} key={name} id={id} name={name}/>
          })
        }
      </div>

      <footer className={styles.footer}>
        Padaria² - Todos os direitos reservados - 2021
      </footer>
    </div>
  );
}