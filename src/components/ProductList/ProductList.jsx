import React from 'react';
import PropTypes from 'prop-types';
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

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      author: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      badge: PropTypes.string,
      type: PropTypes.string,
      rating: PropTypes.string,
      downloads: PropTypes.string,
      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          text: PropTypes.string,
          reviewer: PropTypes.string,
          age: PropTypes.number,
        })
      ),
    })
  ).isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductList;
