import { useMemo } from 'react';

const useSortedProducts = (products, sortKey, type) => {
  return useMemo(() => {
    const productsToSort = products.filter(product => product.type === type);

    return productsToSort.sort((a, b) => {
      if (sortKey === 'name') {
        return (a.name || '').localeCompare(b.name || '');
      } else if (sortKey === 'author') {
        return (a.author || '').localeCompare(b.author || '');
      } else if (sortKey === 'rating') {
        const ratingA = Number(a.rating.replace('/5', ''));
        const ratingB = Number(b.rating.replace('/5', ''));
        return ratingB - ratingA;
      }
      return 0;
    });
  }, [products, type, sortKey]);
};

export default useSortedProducts;
