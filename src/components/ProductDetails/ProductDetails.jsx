import React from 'react';
import styles from './ProductDetails.module.scss';

function ProductDetails({ title, author, rating, description }) {
  return (
    <>
      <div className={styles.detailBlock}>
        <span className={styles.key}>Title:</span>
        <h1 className={styles.value}>{title}</h1>
      </div>
      <div className={styles.detailBlock}>
        <span className={styles.key}>Author:</span>
        <h3 className={styles.value}>{author}</h3>
      </div>
      <div className={styles.detailBlock}>
        <span className={styles.key}>Rating:</span>
        <p className={styles.value}>{rating}</p>
      </div>
      <div className={styles.detailBlock}>
        <span className={styles.key}>Description:</span>
        <p className={styles.value}>{description}</p>
      </div>
    </>
  );
}

export default ProductDetails;
