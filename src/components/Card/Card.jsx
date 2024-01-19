import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Card.module.scss';
import { ReactComponent as ViewedIconSVG } from '../../assets/images/Already.svg';
import { ReactComponent as DefaultIconSVG } from '../../assets/images/Notyet.svg';

function Card({ item, type }) {
  const [isViewed, setIsViewed] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
    setIsViewed(!!viewedItems[item.id]);
  }, [item.id]);

  const handleViewed = () => {
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
    viewedItems[item.id] = true;
    localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
    setIsViewed(true);
  };

  const handleImageLoaded = () => {
    setIsImageLoading(false);
  };

  return (
    <Link
      to={`/product/${item?.id}`}
      className={styles.card}
      onClick={handleViewed}
    >
      <div className={styles.cardImage}>
        <LazyLoadImage
          src={item?.image}
          alt={item?.author}
          className={`${styles.mainImage} ${
            isImageLoading ? styles.loading : ''
          }`}
          onLoad={handleImageLoaded}
        />
        {item.badge && (
          <div className={styles.badge}>
            {isViewed ? <ViewedIconSVG /> : <DefaultIconSVG />}
          </div>
        )}
      </div>
      <div className={styles.desc}>
        <h2 className={styles.author}>{item?.author}</h2>
        <ul className={styles.descList}>
          <li className={styles.desc}>{item?.name}</li>
          <li className={styles.rating}>{item?.rating}</li>
        </ul>
      </div>
    </Link>
  );
}

export default Card;
