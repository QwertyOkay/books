import React, { useState, useMemo } from 'react';
import styles from './ProductsBlock.module.scss';
import products from '../../data/products.json';
import Section from 'components/Section';
import Container from 'components/Container';
import Card from 'components/Card/Card';
import Dropdown from 'components/Dropdown/Dropdown';
import LoaderIcon from 'components/LoaderIcon/LoaderIcon';

function ProductsBlock({ type }) {
  const [sortKey, setSortKey] = useState('name');

  const sortedProducts = useMemo(() => {
    const productsToSort = products.filter(product => product.type === type);
    return productsToSort.sort((a, b) => {
      if (sortKey === 'name') {
        return (a.name || '').localeCompare(b.name || '');
      } else if (sortKey === 'author') {
        return (a.author || '').localeCompare(b.author || '');
      } else if (sortKey === 'rating') {
        // Convert rating "5/5" into a number
        const ratingA = Number(a.rating.replace('/5', ''));
        const ratingB = Number(b.rating.replace('/5', ''));
        return ratingB - ratingA; // Sort
      }
      return 0;
    });
  }, [type, sortKey]);

  const handleSort = key => {
    setSortKey(key === 'Name' ? 'name' : key.toLowerCase());
  };

  const totalBooks = useMemo(() => {
    // Total items
    const count = products.filter(product => product.type === type).length;
    return count + 112;
  }, [type]);

  return (
    <Section variant="products">
      <Container variant="ProductsBlock">
        <div className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>Books read this month</h2>
        </div>

        <div className={styles.sectionWrap}>
          <div className={styles.sectionHolder}>
            <span>{totalBooks}</span>
            <span>Books</span>
          </div>

          <Dropdown onSort={handleSort} />
        </div>

        <div className={styles.products}>
          {sortedProducts.map(item => (
            <li className={styles.productsItem} key={item.id}>
              <Card item={item} type={type} />
            </li>
          ))}
        </div>
        <div className={styles.holderLoader}>
          <LoaderIcon />
        </div>
      </Container>
    </Section>
  );
}

export default ProductsBlock;
