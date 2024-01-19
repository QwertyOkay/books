import React from 'react';
import styles from './ProductImageWithCaption.module.scss';

function ProductImageWithCaption({ image, name, downloads }) {
  return (
    <figure className={styles.figure}>
      <img src={image} alt={name} className={styles.mainImg} />
      <figcaption className={styles.caption}>
        <div className={styles.detailBlock}>
          <span className={styles.key}>Downloads: </span>
          <span className={styles.value}>{downloads}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default ProductImageWithCaption;
