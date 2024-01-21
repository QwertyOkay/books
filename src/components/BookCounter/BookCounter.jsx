import React, { useMemo } from 'react';
import products from '../../data/products.json';
import styles from './BookCounter.module.scss';

const BookCounter = ({ type }) => {
  const totalBooks = useMemo(() => {
    const count = products.filter(product => product.type === type).length;
    return count + 111; // Fixed
  }, [type]);

  return (
    <div className={styles.holder}>
      <span>{totalBooks}</span>
      <span>Books</span>
    </div>
  );
};

export default BookCounter;
