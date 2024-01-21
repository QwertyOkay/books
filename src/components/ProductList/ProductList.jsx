import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';
import styles from './ProductList.module.scss';

const ProductList = React.memo(({ products, type }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <ul className={styles.productList}>
      {products.map((item, index) => (
        <motion.li
          key={item.id}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          className={styles.productListItem}
        >
          <Card item={item} type={type} />
        </motion.li>
      ))}
    </ul>
  );
});

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
