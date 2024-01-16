import { useEffect, useState } from 'react';
import products from 'data/products.json';
import Card from 'components/Card';
import PaginationItems from 'components/PaginationItems';
import styles from './List.module.scss';

const pageSize = 9;

function List({ cat, maxPrice, sort }) {
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let items = [...products]; // Create a copy of the products array
    if (cat) {
      items = items.filter(
        item => item.category === cat && item.price <= maxPrice
      );
    } else {
      items = items.filter(item => item.price <= maxPrice);
    }

    if (sort === 'asc') {
      items = items.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
      items = items.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(items);
  }, [cat, maxPrice, sort]);

  useEffect(() => {
    // Ensure the current page is set to 1 when filters change
    setCurrentPage(1);
  }, [cat, maxPrice, sort]);

  const handleSetPage = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const visibleItems = filteredItems.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div className={styles.list}>
        {visibleItems.map(item => (
          <li className={styles.listItem} key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </div>
      <div className={styles.paginationWrap}>
        <PaginationItems
          totalItems={filteredItems.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onSetPage={handleSetPage}
        />
      </div>
    </>
  );
}

export default List;
