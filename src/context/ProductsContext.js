// import React, { createContext, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';

// // Создаем контекст
// export const ProductsContext = createContext({
//   loadedProducts: [],
//   isFetchingMore: false,
//   fetchMoreProducts: () => {},
//   setLoadedProducts: () => {},
//   setIsFetchingMore: () => {}
// });

// // Создаем провайдер контекста
// export const ProductsProvider = ({ children }) => {
//   const [loadedProducts, setLoadedProducts] = useState([]);
//   const [isFetchingMore, setIsFetchingMore] = useState(false);

//   const fetchMoreProducts = useCallback(async () => {
//     if (isFetchingMore || loadedProducts.length >= 100 /* Предположим, что 100 - максимальное количество продуктов */) {
//       return;
//     }

//     setIsFetchingMore(true);

//     // Здесь должна быть ваша логика для загрузки реальных данных
//     // Пример: имитация асинхронной загрузки
//     setTimeout(() => {
//       const newProducts = []; // Здесь должны быть новые данные
//       setLoadedProducts(prev => [...prev, ...newProducts]);
//       setIsFetchingMore(false);
//     }, 2000);
//   }, [isFetchingMore, loadedProducts]);

//   return (
//     <ProductsContext.Provider value={{ loadedProducts, setLoadedProducts, isFetchingMore, setIsFetchingMore, fetchMoreProducts }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// ProductsProvider.propTypes = {
//   children: PropTypes.node.isRequired
// };

import React, { createContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import useSortedProducts from '../hooks/useSortedProducts'; // Убедитесь, что путь к хуку правильный
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
