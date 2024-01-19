import React from 'react';
import Card from 'components/Card/Card';
import styles from './ProductList.module.scss';

const ProductList = ({ products, type }) => {
  return (
    <ul className={styles.productList}>
      {products.map(item => (
        <li className={styles.productListItem} key={item.id}>
          <Card item={item} type={type} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
