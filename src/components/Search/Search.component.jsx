import React from 'react';

import styles from './Search.module.css';

// images
import SearchSVG from './../../assets/search.svg?component';

function Search() {

  const [value, setValue] = React.useState('');

  function handleClick() {
    // implement search here
  }

  function handleChange({target}) {
    setValue(target.value);
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.icon} onClick={handleClick}>
        <SearchSVG/>
      </label>
      <input value={value} onChange={handleChange} type="text" id="search" name="search" placeholder="Buscar" />
    </div>
  );
}

export default Search;