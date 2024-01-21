import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsBlock.module.scss';
import Section from 'components/Section';
import Container from 'components/Container';
import SortHandler from 'components/SortHandler/SortHandler';
import BookCounter from 'components/BookCounter/BookCounter';
import ProductList from 'components/ProductList/ProductList';
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll';
import { ProductsContext } from '../../context/ProductsContext';

function ProductsBlock({ type }) {
  const { loadedProducts, isFetchingMore, fetchMoreProducts, setSortKey } =
    useContext(ProductsContext);

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
          hasMore={loadedProducts.length < 100}
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
