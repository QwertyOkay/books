import React, { createContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import useSortedProducts from '../hooks/useSortedProducts';
import products from '../data/products.json';

export const ProductsContext = createContext({
  loadedProducts: [],
  isFetchingMore: false,
  fetchMoreProducts: () => {}
});

export const ProductsProvider = ({ children, type }) => {
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
      setLoadedProducts(prev => [
        ...prev,
        ...sortedProducts.slice(prev.length, prev.length + 10)
      ]);
      setIsFetchingMore(false);
    }, 2000);
  }, [isFetchingMore, loadedProducts, sortedProducts]);

  return (
    <ProductsContext.Provider value={{ loadedProducts, isFetchingMore, fetchMoreProducts, setSortKey }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired
};
