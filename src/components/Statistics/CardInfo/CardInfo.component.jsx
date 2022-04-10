import React from 'react';

import styles from './CardInfo.module.css';

function CardInfo({ title, content, image }) {
  return (
    <div className={styles.wrapper}>
      <h3>
        <span>{title}</span>
        <object type="image/svg+xml" data={image} alt="icon" ></object>
      </h3>
      <p>
        {content}
      </p>
    </div>
  );
}

export default CardInfo;