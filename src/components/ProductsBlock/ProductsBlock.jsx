import React, { useState, useMemo } from 'react';
import styles from './ProductsBlock.module.scss';
import products from '../../data/products.json';
import Section from 'components/Section';
import Container from 'components/Container';
import Card from 'components/Card/Card';
import Dropdown from 'components/Dropdown/Dropdown';
import LoaderIcon from 'components/LoaderIcon/LoaderIcon';

function ProductsBlock({ type }) {
  const [sortKey, setSortKey] = useState('name'); // Состояние для ключа сортировки

  const sortedProducts = useMemo(() => {
    const productsToSort = products.filter(product => product.type === type);
    return productsToSort.sort((a, b) => {
      if (sortKey === 'name') {
        return (a.name || '').localeCompare(b.name || '');
      } else if (sortKey === 'author') {
        return (a.author || '').localeCompare(b.author || '');
      } else if (sortKey === 'rating') {
        // Преобразуем строку рейтинга "5/5" в число для сравнения
        const ratingA = Number(a.rating.replace('/5', ''));
        const ratingB = Number(b.rating.replace('/5', ''));
        return ratingB - ratingA; // Для сортировки по убыванию
      }
      return 0;
    });
  }, [type, sortKey]); // Пересчитываем, когда меняется тип или ключ сортировки

  // Функция для обновления ключа сортировки
  const handleSort = key => {
    setSortKey(key === 'Name' ? 'name' : key.toLowerCase());
  };

  return (
    <Section variant="products">
      <Container>
        <div className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>Books read this month</h2>
        </div>

        <div className={styles.sectionWrap}>
          <div className={styles.sectionHolder}>
            <span>122</span>
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
