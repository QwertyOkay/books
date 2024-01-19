import React from 'react';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import styles from './ProductHeader.module.scss'; // предполагается, что стили будут вынесены в отдельный файл

function ProductHeader() {
  return (
    <header className={styles.header}>
      <ButtonBack />
    </header>
  );
}

export default ProductHeader;
