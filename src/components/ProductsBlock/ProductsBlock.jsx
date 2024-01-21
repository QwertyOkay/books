import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import Container from 'components/Container';
import Header from 'components/Header/Header';
import SortingAndCountingSection from 'components/SortingAndCountingSection/SortingAndCountingSection'; // Подключите новый компонент
import ProductList from 'components/ProductList/ProductList';
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll';
import { ProductsContext } from '../../context/ProductsContext';

function ProductsBlock({ type }) {
  const { loadedProducts, isFetchingMore, fetchMoreProducts, setSortKey } =
    useContext(ProductsContext);

  return (
    <Section variant="products">
      <Container variant="ProductsBlock">
        <Header title="Books read this month" />
        <SortingAndCountingSection type={type} onSort={setSortKey} />
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
