import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsBlock.module.scss';
import Section from 'components/Section';
import Container from 'components/Container';
import Dropdown from 'components/Dropdown/Dropdown';
import LoaderIcon from 'components/LoaderIcon/LoaderIcon';
import useSortedProducts from '../../hooks/useSortedProducts';
import products from '../../data/products.json';
import BookCounter from '../BookCounter/BookCounter';
import ProductList from '../ProductList/ProductList';

function ProductsBlock({ type }) {
  const [sortKey, setSortKey] = useState('name');
  const [sortChanged, setSortChanged] = useState(false);

  const sortedProducts = useSortedProducts(products, sortKey, type);

  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    setLoadedProducts(sortedProducts.slice(0, 10));
  }, [sortedProducts]);

  const fetchMoreProducts = useCallback(() => {
    if (isFetchingMore || loadedProducts.length >= sortedProducts.length)
      return;

    setIsFetchingMore(true);
    setTimeout(() => {
      const nextProducts = sortedProducts.slice(
        loadedProducts.length,
        loadedProducts.length + 10
      );
      setLoadedProducts(prevProducts => [...prevProducts, ...nextProducts]);
      setIsFetchingMore(false);
    }, 2000);
  }, [isFetchingMore, loadedProducts.length, sortedProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        loadedProducts.length < sortedProducts.length &&
        !isFetchingMore
      ) {
        fetchMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [
    isFetchingMore,
    loadedProducts.length,
    sortedProducts.length,
    fetchMoreProducts,
  ]);

  const handleSort = key => {
    setSortKey(key === 'Name' ? 'name' : key.toLowerCase());
    setSortChanged(true);

    const timeout = setTimeout(() => setSortChanged(false), 500);
    return () => clearTimeout(timeout);
  };

  return (
    <Section variant="products">
      <Container variant="ProductsBlock">
        <div className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>Books read this month</h2>
        </div>

        <div className={styles.sectionWrap}>
          <BookCounter type={type} />
          <Dropdown onSort={handleSort} />
        </div>

        <ProductList
          products={loadedProducts}
          type={type}
          sortChanged={sortChanged}
        />

        {isFetchingMore && loadedProducts.length < sortedProducts.length && (
          <div className={styles.holderLoader}>
            <LoaderIcon />
          </div>
        )}
      </Container>
    </Section>
  );
}

ProductsBlock.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProductsBlock;
