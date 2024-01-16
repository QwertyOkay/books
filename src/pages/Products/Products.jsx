import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from 'components/List';
import styles from './Products.module.scss';

function Products() {
  const cat = useParams().category;
  const [maxPrice, setMaxPrice] = useState(300);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className={styles.products}>
        <ul className={styles.left}>
          <li className={styles.leftItem}>
            <h2 className={styles.itemName}>price range</h2>
            <div className={styles.inputItem}>
              <span>€&nbsp;0</span>
              <input
                className={styles.styledRange}
                type="range"
                min={0}
                max={300}
                onChange={e => setMaxPrice(e.target.value)}
              />
              <span>€&nbsp;{maxPrice}</span>
            </div>
          </li>
          <li className={styles.leftItem}>
            <h2 className={styles.itemName}>Sort by Price</h2>
            <div className={styles.inputItem}>
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={() => setSort('asc')}
              />
              <label htmlFor="asc">Lowest first</label>
            </div>
            <div className={styles.inputItem}>
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={() => setSort('desc')}
              />
              <label htmlFor="desc">Highest first</label>
            </div>
          </li>
        </ul>
        <div className={styles.right}>
          <List cat={cat} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </>
  );
}

export default Products;
