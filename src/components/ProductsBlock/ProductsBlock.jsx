import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsBlock.module.scss';
import Section from 'components/Section';
import Container from 'components/Container';
import SortHandler from 'components/SortHandler/SortHandler';
import BookCounter from 'components/BookCounter/BookCounter';
import ProductList from 'components/ProductList/ProductList';
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll';
import useSortedProducts from '../../hooks/useSortedProducts';
import products from '../../data/products.json';

function ProductsBlock({ type }) {
  const [sortKey, setSortKey] = useState('name');
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const sortedProducts = useSortedProducts(products, sortKey, type);

  useEffect(() => {
    setLoadedProducts(sortedProducts.slice(0, 10));
  }, [sortedProducts]);

  const fetchMoreProducts = useCallback(() => {
    if (isFetchingMore || loadedProducts.length >= sortedProducts.length) {
      return;
    }
    setIsFetchingMore(true);
    setTimeout(() => {
      setLoadedProducts(prevProducts => [
        ...prevProducts,
        ...sortedProducts.slice(prevProducts.length, prevProducts.length + 10),
      ]);
      setIsFetchingMore(false);
    }, 2000);
  }, [isFetchingMore, loadedProducts, sortedProducts]);

  return (
    <Section variant="products">
      <Container variant="ProductsBlock">
        <div className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>Books read this month</h2>
        </div>
        <div className={styles.sectionWrap}>
          <BookCounter type={type} />
          <SortHandler onSort={setSortKey} />
        </div>
        <InfiniteScroll
          onLoadMore={fetchMoreProducts}
          loading={isFetchingMore}
          hasMore={loadedProducts.length < sortedProducts.length}
        >
          <ProductList products={loadedProducts} type={type} />
        </InfiniteScroll>
      </Container>
    </Section>
  );
}

ProductsBlock.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProductsBlock;
