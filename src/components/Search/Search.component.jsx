import React from 'react';

import styles from './Search.module.css';

// images
import SearchSVG from './../../assets/search.svg?component';

function Search({ setSearch }) {

  const [value, setValue] = React.useState('');

  function handleClick() {
    if (setSearch) {
      setSearch(value || ' ');
    }
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